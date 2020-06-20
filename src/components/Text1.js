import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Text1 = () => {

    return (
        <Container fluid>
           <Row>
               <Col lg={12} md={12} sm={12} xs={12} >
                   <span className="fab fa-imdb fa-5x"></span>
               </Col>
           </Row>
        </Container>
    )
}

export default Text1
