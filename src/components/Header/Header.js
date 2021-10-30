import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>

            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Travel Go</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={NavLink} to="/teams">Our Team</Nav.Link>
                        <Nav.Link as={NavLink} to="/booking">Booking</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact Us</Nav.Link>
                        {user.email ?
                            <Button onClick={logOut} variant="light">Log Out</Button> :
                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        }
                        {
                            user.email ?
                                <Navbar.Text>
                                    Signed in as: <span>{user.displayName}</span>
                                </Navbar.Text> :
                                <></>
                        }
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div >
    );
};

export default Header;




