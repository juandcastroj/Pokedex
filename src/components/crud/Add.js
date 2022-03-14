import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { addAsync } from '../../redux/actions/actionProducts'

const Add = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [values, handleInputChange, reset] = useForm({
       nombre: '',
       codigo: '',
       descripcion: '', 
       precio: ''

    })
    const { nombre, codigo, descripcion, precio } = values

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addAsync(values))
        //console.log(nombre, codigo, descripcion, precio)
        
        reset()
        alert("PRODUCTO AGREGADO")

        setTimeout(() => {
          navigate('/')
      },2000)
    }



  return (
    <div>
         <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Enter name" value={nombre} onChange={handleInputChange} />

                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" name="descripcion" placeholder="Enter description" value={descripcion} onChange={handleInputChange} />

                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="text" name="codigo" value={codigo} onChange={handleInputChange} />

                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" name="precio" value={precio} onChange={handleInputChange} />
                
                </Form.Group>

                <Button type="submit" variant='success' > Agregar Producto
                    {/* <Image width={40} src='https://res.cloudinary.com/danimel/image/upload/v1646016294/anadir_eitgpy.png' /> */}
                </Button>
            </Form>

            <Link to="/"> volver a inicio</Link>
    </div>
  )
}

export default Add