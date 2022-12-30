import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MediaCard = ({ media }) => {
    const { name, task, photoURL, image } = media;

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
                <Card.Img className="mb-2" variant="top" src={image} />
                    <Card.Text>
                        <p><b>My Task </b></p>
                        <p>{task}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <Link to=''>
                        <Button variant="primary">Update</Button>
                    </Link>
                    <Link to=''>
                        <Button variant="danger">Delete</Button>
                    </Link>
                    <Link to=''>
                        <Button variant="primary">Complete</Button>
                    </Link>
                    <Link to='/'>
                        <Button variant="dark">Back</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default MediaCard;