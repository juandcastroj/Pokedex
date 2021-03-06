import React from 'react'
import { Button, Form, Image } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { addAsync } from '../../redux/actions/actionPoke'
import { fileUploas } from '../helpers/fileUploas';
import '../style/style.css'

const Add = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [values, handleInputChange, reset] = useForm({
       nombre: '',
       numero: '',
       tipo: '', 
       imagen: ''

    })
    const { nombre, numero, tipo, imagen } = values

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addAsync(values))
        //console.log(nombre, codigo, descripcion, precio, imagen)       
        reset()
        alert("POKEMON AGREGADO")

        setTimeout(() => {
          navigate('/')
      },2500)
    }

    const handleFileChange =(e)=>{
      const file = e.target.files[0]
      fileUploas(file)
          .then(resp =>{
             values.imagen = resp
              console.log(resp)
          })
          .catch(error =>{
              console.log(error.message)
          })
  }


  return (
    <div className='Forms'  >
         <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre del Pokemon</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Enter name" value={nombre} onChange={handleInputChange} />

                    <Form.Label>numero</Form.Label>
                    <Form.Control type="text" name="numero" placeholder="Enter description" value={numero} onChange={handleInputChange} />

                    <Form.Label>tipo</Form.Label>
                    <Form.Control type="text" name="tipo" value={tipo} onChange={handleInputChange} />

                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="imagen" value={imagen} placeholder="Ingrese Foto.jpg" onChange={handleFileChange} />
                
                </Form.Group>

                <Button type="submit" variant='warning' > Agregar Pokemon
                    <Image width={40} src='https://res.cloudinary.com/danimel/image/upload/v1646016294/anadir_eitgpy.png' />
                </Button>
            </Form>

            <Link to="/"> volver a inicio</Link>
    </div>
  )
}

export default Add