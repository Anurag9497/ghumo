import React from 'react';
import './index.css';
import {Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <Container className=" bg-dark footer" fluid>
            <Row className="justify-content-center pt-3" id="logo">
                GHUMO
            </Row>
            <Row className="justify-content-center mt-1">
                Copyright &copy; 2021 GHUMO, All Rights Reserved.
            </Row>
            <Row className="justify-content-center flex-nowrap mt-1 pb-3">
                <Link to="/policy" className="footlink">Privacy Policy</Link>
                <Link to="/faq" className="footlink">FAQ</Link>
            </Row>
        </Container>
    );
}

export default Footer;
