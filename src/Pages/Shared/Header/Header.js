import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <b>Task Management</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/dailytask'>Daily Task</Nav.Link>
                        <Nav.Link href='/addtask'>Add Task</Nav.Link>
                        <Nav.Link href="/mytask">My Task</Nav.Link>
                        <Nav.Link href="/completedtask">Completed Task</Nav.Link>
                        <Nav.Link href="/media">Media</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        <span className='me-4'>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='text-decoration-none' to='/login'>Login</Link>
                                    </>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;