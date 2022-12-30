import React, { useState } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const MyTaskCard = ({ myTask }) => {
    const { _id, name, task, photoURL, status } = myTask;
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate();

    const handleStatusUpdate = id => {
        fetch(`https://task-management-server-pi.vercel.app/alltasks/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Completed'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = tasks.filter(tas => tas._id !== id);
                const completing = tasks.find(tas => tas._id === id);
                completing.status = 'Completed'

                const newTasks = [completing, ...remaining];
                setTasks(newTasks);
                navigate('/completedtask');
            }
        })
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this task')
        if (proceed) {
            fetch(`https://task-management-server-pi.vercel.app/alltasks/${id}`, {
                method: 'DELETE'
            })
        }
        navigate('/');
    };

    const handleEdit = (id) => {
        // navigate(`/edittask/${id}`)
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
                    <Button onClick={() => handleEdit(_id)} variant="primary">Edit</Button>
                    <Button onClick={() => handleStatusUpdate(_id)} variant="primary">{status ? status : 'Not Complete'}</Button>
                    <Button onClick={() => handleDelete(_id)} variant="danger">Delete</Button>
                    <Link to='/'>
                        <Button variant="dark">Back</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default MyTaskCard;