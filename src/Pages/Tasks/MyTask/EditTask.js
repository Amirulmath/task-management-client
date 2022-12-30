import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const EditTask = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState({});
    const { id, name, task, photoURL } = user;
    const navigate = useNavigate();

    useEffect(() =>{
        fetch(`http://localhost:5000/alltasks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
            setTasks(data.data);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
    }, [id]);

    const handleTaskEdit = event => {
        event.preventDefault();
        const tasks = {
            name: event.target.name.value,
            email: event.target.email.value,
            task: event.target.task.value,
            photoURL: event.target.photoURL.value
        }
    }    

    return (
        <div>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                            roundedCircle
                            className='me-2'
                            src={photoURL}
                            style={{ height: '60px' }}
                        ></Image>
                        <div>
                            <p className='mb-0'>{name}</p>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p><b>My Task </b></p>
                        <p>{task}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <Button onClick={handleTaskEdit} variant="primary">Edit</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default EditTask;