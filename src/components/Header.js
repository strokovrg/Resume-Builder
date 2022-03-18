import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from './logo192.png';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Profile from '../pages/Profile';


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                heigh="30"
                                width="30"
                                className='d-inline-block align-top'
                                alt="Logo"
                            /> Resume Builder
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto">
                                <Nav.Link href='/'> Home </Nav.Link>
                                <Nav.Link href='/about'> About us </Nav.Link>
                                <Nav.Link href='/contacts'> Contacts </Nav.Link>
                                <Nav.Link href='/profile'> Profile </Nav.Link>
                            </Nav>
                            <Form inline="true" className="d-flex">
                                <FormControl
                                    type="text"
                                    placeholder='Search'
                                    className='me-2'
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/About" element={<About />} />
                        <Route exact path="/Contacts" element={<Contacts />} />
                        <Route exact path="/Profile" element={<Profile />} />
                    </Routes>
                </Router>
            </>
        )
    }
}