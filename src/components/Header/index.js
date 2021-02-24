import React from 'react';
import './index.css';
import {Container,Row, Navbar, Nav, Button, FormControl, Form, Image} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header=()=> {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" id="navbar-upper" fixed="top">
                <Navbar.Brand  className="navbrand">GHUMO</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="ml-5">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </Nav>
                    <NavLink to="/account">
                        <Button variant="light" className="mt-2 mb-2 mr-auto">Create Account</Button>
                    </NavLink>
                    <Form className="mt-2 mb-2 ml-auto mr-4" inline>
                        <FormControl style={{borderRadius: "0", borderRight: "none"}} placeholder="Search..."/>
                        <Button id="search" variant="success">
                            <Image src="https://img.icons8.com/ios/20/000000/search--v1.png"/>
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            
            <Container style={{marginTop: "5em"}} fluid>
                <Row className="justify-content-around mt-1 flex-nowrap overflow-scroll" id="navbar-lower">
                    <NavLink to="/stays" className="navlink-bottom">
                        <Image src="https://img.icons8.com/clouds/50/000000/4-star-hotel.png"/>
                        Stays
                    </NavLink>
                    <NavLink to="/flights" className="navlink-bottom">
                        <Image src="https://img.icons8.com/clouds/50/000000/airport.png"/>
                        Flights
                    </NavLink>
                    <NavLink to="/trains" className="navlink-bottom">
                        <Image src="https://img.icons8.com/clouds/50/000000/train.png"/>
                        Trains
                    </NavLink>
                    <NavLink to="/buses" className="navlink-bottom">
                        <Image src="https://img.icons8.com/clouds/50/000000/bus.png"/>
                        Buses
                    </NavLink>
                    <NavLink to="/explore" className="navlink-bottom">
                        <Image src="https://img.icons8.com/clouds/50/000000/globe.png"/>
                        Explore
                    </NavLink>
                    <NavLink to="/travelbucket" className="navlink-bottom">
                        <Image src="https://img.icons8.com/clouds/50/000000/favorite-cart.png"/>
                        Bucket
                    </NavLink>
                </Row>
            </Container>
        </>
    );
}

export default Header;