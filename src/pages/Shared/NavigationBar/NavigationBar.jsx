import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user } = useContext(AuthContext);

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/'>Home</Link>
                            <Link to='/'>About</Link>
                            <Link to='/'>Career</Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}
                            {user ?
                                <Button variant="secondary">LogOut</Button> :
                                <Link to='/login'><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;