import React from 'react'
// import { useDispatch } from 'react-redux'
// import { logout } from '../redux/actions/actionLogin'
import { Button, Container, Form, FormControl, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import logo from '../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions/actionLogin'
import { useDispatch } from 'react-redux'

const Naveg = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogOut = () => {
        dispatch(logout())
        setTimeout(() => {
            navigate('/login')
        },1000)
    }

    return (
        <div>
            <Navbar bg="dark" expand={false}>
                <Container fluid>
                    <Image src={logo} width='180' /> 
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="warning">Search</Button>
                    </Form>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" variant="info" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link to='/login' > Login </Link>
                                <Link to="/register">Registrarse</Link>
                                <Button     onClick={() => handleLogOut()}> logout</Button>
                                <Link to='/pokemon' > traerApi</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>

    )
}

export default Naveg