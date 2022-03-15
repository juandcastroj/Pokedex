import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// import { useDispatch } from 'react-redux'
// import { logout } from '../redux/actions/actionLogin'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Naveg = () => {

    // const dispatch = useDispatch()
    // const navigate = useNavigate()

    // const handleLogOut = () => {

    //     dispatch(logout())
    //     setTimeout(() => {
    //         navigate('/login')
    //     },1000)

    // }


    return (

        <div>

            <Navbar bg="info" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="/src/container/Container.js">Pokedex</Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="warning">Search</Button>

                        <Link to='/add' > Agregar Pokemon  </Link>
                        
                    </Form>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
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
                                <Nav.Link href="#action1">Agregar Pokemon</Nav.Link>
                                <Nav.Link href="#action2"> Login </Nav.Link>

                                <Nav.Link href="#action3">Registrarse</Nav.Link>
                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5"> Something else here</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                </NavDropdown>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>

    )
}

export default Naveg