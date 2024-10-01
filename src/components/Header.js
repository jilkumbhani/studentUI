import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TfiAlignJustify } from "react-icons/tfi";
import { RiShutDownLine } from 'react-icons/ri';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Header = ({ setStatus }) => {

    const navigate = useNavigate();

    const logout = () => {
        axios.get("https://student-g9ap.onrender.com/logout")
            .then(function (response) {
                console.log(response.data.status);
                if (response.data.status == "admin logout") {
                    localStorage.setItem('status', true)
                    setStatus(true)
                    navigate("/login")
                }
            })
    }

    return (
        <div>
            <div className=' '>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home"><TfiAlignJustify /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </Nav>
                            <Nav className='me-end'>
                                <Nav.Link href="" onClick={() => { logout() }}><RiShutDownLine /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </div>
        </div>
    )
}

export default Header