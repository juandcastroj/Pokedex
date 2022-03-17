import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAsync } from '../../redux/actions/actionPoke'
import '../style/style.css'

const List = () => {

    const dispatch = useDispatch()
    const { pokemons } = useSelector(store => store.pokemon)

    return (
        <div id='cardsPoke' >
            <Row xs={1} md={4} className="g-4">
                {pokemons.map((e, i) => (
                    <Col key={i} >
                        <Card style={{width: '250px'}}  >
                            <Card.Img variant="top" src={e.imagen} />
                            <Card.Body>
                                <h4>{e.nombre}</h4>
                                <h5># {e.numero}</h5>                                
                                <Card.Text>
                                <h6>tipo: {e.tipo}</h6>
                                </Card.Text>
                                <Button variant="outline-danger" onClick={() => dispatch(deleteAsync(e.nombre))} > Eliminar  </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default List