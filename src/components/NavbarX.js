import React from 'react';
import { Navbar, Button, Nav, Form, FormControl } from 'react-bootstrap'
import logo from "../img/logo.png";

class NavbarX extends React.Component {
    state = {}

    render() {
        return <div style={{ position: 'fixed', zIndex: '1', width: '100%' }}>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home"><i className="fas fa-bars"></i></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home"><img src={logo} style={{ width: '50px' }} /></Nav.Link>
                </Nav>
                <Form inline >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </div >
    }
}

export default NavbarX;