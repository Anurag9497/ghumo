import React from 'react';
import './index.css';
import {Container,Row, Navbar, Nav, Button, InputGroup, FormControl, Form, Image} from 'react-bootstrap';

const Header=()=> {
    return (
        <Container className="border-bottom" id="myNavBar" fluid>
            <Row className="justify-content-around" id="navbar-upper">
                <Navbar.Brand  className="navbrand">GHUMO</Navbar.Brand>
                <Nav.Link href="#home" className="navlink">Home</Nav.Link>
                <Nav.Link href="#about"  className="navlink">About</Nav.Link>
                <Nav.Link href="#contact"  className="navlink">Contact Us</Nav.Link>
                <Nav.Link href="#login"  className="navlink">Login</Nav.Link>
                <Button href="#account" variant="light" className="mt-2 mb-2">Create Account</Button>
                <Form className="mt-2 mb-2" inline>
                    <FormControl placeholder="Search..."/>
                    <InputGroup.Append>
                        <Button variant="success">
                            <Image src="https://img.icons8.com/ios/20/000000/search--v1.png"/>
                        </Button>
                    </InputGroup.Append>
                </Form>
            </Row>
            <Row className="justify-content-around mt-1 flex-nowrap overflow-auto" id="navbar-lower">
                <Nav.Link href="#stays" className="navlink-bottom">
                    <Image src="https://img.icons8.com/clouds/50/000000/4-star-hotel.png"/>
                    Stays
                </Nav.Link>
                <Nav.Link href="#flights" className="navlink-bottom">
                    <Image src="https://img.icons8.com/clouds/50/000000/airport.png"/>
                    Flights
                </Nav.Link>
                <Nav.Link href="#trains" className="navlink-bottom">
                    <Image src="https://img.icons8.com/clouds/50/000000/train.png"/>
                    Trains
                </Nav.Link>
                <Nav.Link href="#buses" className="navlink-bottom">
                    <Image src="https://img.icons8.com/clouds/50/000000/bus.png"/>
                    Buses
                </Nav.Link>
                <Nav.Link href="#attractions" className="navlink-bottom">
                    <Image src="https://img.icons8.com/clouds/50/000000/globe.png"/>
                    Explore
                </Nav.Link>
                <Nav.Link href="#travelbucket" className="navlink-bottom">
                    <Image src="https://img.icons8.com/clouds/50/000000/favorite-cart.png"/>
                    Bucket
                </Nav.Link>
            </Row>
        </Container>
    );
}

export default Header;