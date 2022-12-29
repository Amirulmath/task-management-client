import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const DailyTask = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleDailyTask = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const email = user?.email || 'unregistered';
        const task = form.task.value;
        const photoURL = form.photoURL.value;

        const dailyTask = {
            name,
            email,
            task,
            photoURL
        }

        fetch('http://localhost:5000/mytasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(dailyTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Added your daily task successfully')
                    form.reset();
                    navigate(from, { replace: true });
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>
            <div className='shadow p-3 my-5 bg-light text-center rounded'>
                <Form onSubmit={handleDailyTask}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name="photoURL" type="text" defaultValue={user?.photoURL} placeholder="Phot URL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" defaultValue={user?.email} disabled placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <div className='mt-4'>
                            <p>Type Daily Task</p>
                            <>
                                <FloatingLabel controlId="floatingTextarea2">
                                    <Form.Control name="task"
                                        as="textarea"
                                        placeholder="Your daily task here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                            </>
                        </div>
                    </Form.Group>

                    <Button className='m-4' variant="primary" type="submit">
                        Submit
                    </Button>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </div>
        </div>
    );
};

export default DailyTask;