import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { registerEmailPasswName } from '../redux/actions/actionRegister'

const Register = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [  values, handleInputChange, reset ] = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

    const { name, email, password1, password2 } = values

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        
        dispatch(registerEmailPasswName(email, password1, name))
        reset()
        // alert("USUARIO REGISTRADO")
        navigate('/logIn')
    }


    
  return (
    <div>
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
                        name="password1"
                        value={password1}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password2"
                        value={password2} 
                        onChange={handleInputChange}                    
                    />
                </Form.Group>


                <Button variant="primary" type="submit">  
                    Registrarse
                </Button>

                <Link to="/login">Login</Link>

            </Form>
    </div>
  )
}

export default Register