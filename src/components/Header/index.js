import React, {useState} from 'react';
import './index.css';
import {Container,Row, Navbar, Nav, Button, FormControl, Form, Image} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Login from '../Login';
import Account from '../Account';

const Header=()=> {
    const [isLogin, setIsLogin] = useState({display: "none"});
    const [isSignUp, setIsSignUp] = useState({display: "none"});

    const handleLogin = () => {
        setIsLogin({display: "block"});
    };

    const handleSignUp = () => {
        setIsSignUp({display: "block"})
    };

    return (
        <div>
            <Account isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>
            <Login isLogin={isLogin} setIsLogin={setIsLogin}/>

            <Navbar collapseOnSelect expand="lg" id="navbar-upper" fixed="top">
                <Navbar.Brand  className="navbrand">GHUMO</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="ml-2">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                        <Nav.Link className="nav-link" onClick={handleLogin}>Login</Nav.Link>
                    </Nav>
                    <Nav.Link className="d-flex justify-content-center ml-2 text-decoration-none">
                        <Button variant="light" className="mt-2 mb-2" onClick={handleSignUp}>Create Account</Button>
                    </Nav.Link>
                    <Form className=" d-flex  justify-content-center mt-2 mb-2 ml-auto" inline>
                        <FormControl style={{borderRadius: "0", border: "none"}} placeholder="Search..."/>
                        <Button id="search" variant="success">
                            <Image src="https://img.icons8.com/ios/20/000000/search--v1.png"/>
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            
            <Container style={{marginTop: "5.4em"}} fluid>
                <Row className="justify-content-around flex-nowrap" id="navbar-lower">
                    <NavLink to="/stays" className="navlink-bottom">
                        <Image src="https://img.icons8.com/clouds/50/000000/4-star-hotel.png"/>
                        Stays
                    </NavLink>
                    <NavLink to="/flights" className="navlink-bottom">
                        <Image src="https://img.icons8.com/clouds/50/000000/airport.png"/>
                        Flights
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
        </div>
    );
}

export default Header;