import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAsync } from '../../redux/actions/actionProducts'
import '../style/style.css'

const List = () => {

    const dispatch = useDispatch()
    const { products } = useSelector(store => store.product)
    //console.log(products);



    return (
        <div id='cardsPoke' >
            <Row xs={1} md={4} className="g-4">
                {products.map((e, i) => (
                    <Col key={i} >
                        <Card>
                            <Card.Img variant="top" src='https://th.bing.com/th/id/OIP.JHt7j0pygnPYZ1HU1Uz_QAHaFj?pid=ImgDet&rs=1' />

                            <Card.Body>
                                <h4>pokemon</h4>
                                <h5>tipo</h5>
                                <h6>poder</h6>
                                <Card.Text>
                                    evolucion
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