import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {Link,withRouter} from 'react-router-dom';
const MovieItem = ({movie:{Title,Poster,Year,imdbID},history}) => {
    return (
        <Col lg={4} md={6} sm={12} xs={12}>
        <Card bg="dark" text="white" style={{marginTop:'2vh'}}>
            <Card.Img variant="top" src={Poster} style={{maxHeight:'45vh'}}/>
            <Card.Body>
                <Card.Title>{Title}-{Year}</Card.Title>
                <Button onClick={()=> history.push(`/movie/${imdbID}`)} type="button" variant="primary">Movie Details</Button>
            </Card.Body>
        </Card>
        </Col>
    )
}

MovieItem.propTypes = {
movie:PropTypes.object.isRequired
}

export default withRouter(MovieItem)
