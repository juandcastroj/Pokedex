import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { registerEmailPasswName } from '../redux/actions/actionRegister'
import './style/style.css'

const Register = () => {

    const dispatch = useDispatch()
    //const navigate = useNavigate()

    const [  values, handleInputChange, reset ] = useForm({
        name: '',
        email: '',
        password: '',
    })

    const { name, email, password } = values

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        dispatch(registerEmailPasswName(email, password, name))
        //reset()
         //console.log("USUARIO REGISTRADO")
        //navigate('/')
    }
   
  return (
    <div className='Forms' >
         <Form onSubmit={handleSubmitRegister} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="warning" type="submit">  
                    Crear cuenta
                </Button>
            </Form>
            <Link to="/login">Login</Link>
    </div>
  )
}

export default Register