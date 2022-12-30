import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddTask = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleMediaTask = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const mediaTask = {
                        name: data.name,
                        email: data.email,
                        task: data.task,
                        photoURL: data.photoURL,
                        image: imgData.data.url,
                    }

                    fetch('https://task-management-server-pi.vercel.app/mediatasks', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(mediaTask)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('Your product added successfully')
                            navigate(from, { replace: true });
                        })
                }
            })

    }

    return (
        <div className='m-4'>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-200">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleMediaTask)}>
                                <div className="form-control mt-2">
                                    <input type="text" defaultValue={user?.displayName} {...register("name", {
                                        required: "Your Name is required"
                                    })} placeholder="Name" className="input input-bordered" />
                                    {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                                </div>
                                <div className="form-control mt-2">
                                    <input type="email" defaultValue={user?.email} {...register("email", {
                                        required: "Email Address is required"
                                    })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <p className='text-danger'>{errors.email?.message}</p>}
                                </div>
                                <div className="form-control mt-2">
                                    <input type="text" defaultValue={user?.photoURL} {...register("photoURL")} placeholder="Name" className="input input-bordered" />
                                    {errors.photoURL && <p className='text-danger'>{errors.name.message}</p>}
                                </div>
                                <div className="form-control mt-2">
                                    <textarea className="textarea textarea-bordered w-full" {...register("task", {
                                        required: "Task is Required"
                                    })} placeholder="Product Description"></textarea>
                                    {errors.task && <p className='text-danger'>{errors.usedTime.message}</p>}
                                </div>
                                <div>
                                <label className="label mt-4">
                                        <p className="label-text"> Photo</p>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <input type="file" {...register("image", {
                                        required: "Photo is Required"
                                    })} placeholder="Photo" className="input input-bordered" />
                                    {errors.image && <p className='text-danger'>{errors.image.message}</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-primary w-full' value="Submit" type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;