import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
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
                        {user.email ? '' :
                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        }
                        {
                            user.email ?
                                <Navbar.Text>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                                            Signed in as: <span>{user.displayName}</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ color: "black", backgroundColor: "#212529" }}>
                                            <Dropdown.Item as={NavLink} to="/myBookings">My Bookings</Dropdown.Item>
                                            <Dropdown.Item as={NavLink} to="/manageBookings">Manage Bookings</Dropdown.Item>
                                            <Dropdown.Item as={NavLink} to="/addService">Add Service</Dropdown.Item>
                                            <Dropdown.Item onClick={logOut} >Log Out</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

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




