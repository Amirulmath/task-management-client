import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const CompletedTaskCard = ({ myTask }) => {
    const { _id, name, task, photoURL, status } = myTask;
    const navigate = useNavigate();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this task')
        if (proceed) {
            fetch(`https://task-management-server-pi.vercel.app/alltasks/${id}`, {
                method: 'DELETE'
            })
        }
        navigate('/');
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
                    <div>
                        {
                            status ?
                                <>
                                    <Button variant="primary"> Completed</Button>
                                </>
                                :
                                <>
                                    <Link to='/mytask'>
                                        <Button variant="primary">Not Complete</Button>
                                    </Link>
                                </>
                        }
                    </div>
                    <Button onClick={() => handleDelete(_id)} variant="danger">Delete</Button>
                    <Link to='/'>
                        <Button variant="dark">Back</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CompletedTaskCard;