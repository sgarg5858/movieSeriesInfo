import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner';
import {connect} from 'react-redux'
import {fetchMovie} from '../../store/actions/searchActions'
import {withRouter} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

const Movie = ({movies:{isLoading,movie:{
    Title,Year,Rated,Released,Runtime,Genre,Writer,Director,Actors,Poster,imdbRating
},error},fetchMovie,match,history}) => {

    useEffect(()=>{
        fetchMovie(match.params.id);
    },[fetchMovie])

    if( error!==null)
    {
        return <Row style={{justifyContent:'center'}}> <h1 style={{color:'red',marginTop:'20vh'}}>Wrong Id!</h1></Row>
    }

    return (
       isLoading? <Row style={{justifyContent:'center',marginTop:'20vh'}}><Spinner/></Row>:
       <Container fluid >
       <Row style={{alignContent:'center'}}>
           <Col style={{marginTop:'2vh'}} lg={{span:4,offset:1}} md={{span:4,offset:1}} sm={{span:5,offset:0}} xs={{span:10,offset:1}}>
           <Image src={Poster} rounded  fluid  />
           </Col>
           
           <Col  style={{marginTop:'2vh'}}lg={{span:6,offset:0}} md={{span:7,offset:0}} sm={{span:7,offset:0}} xs={{span:10,offset:1}}>
             <Card bg="dark" text="white" >
                    <Card.Title style={{marginLeft:'18px',marginTop:'20px'}} >{Title}-{Year}</Card.Title>
               <Card.Body >
                   <Card.Text>
                        <p><strong>Genre: </strong> {Genre}</p>
                        <p><strong>Released: </strong> {Released}</p>
                        <p><strong>Rating: </strong> {Rated}</p>
                        <p><strong>IMDB Rating: </strong> {imdbRating}</p>
                        <p><strong>Director: </strong> {Director}</p>
                        <p><strong>Writer: </strong> {Writer}</p>
                        <p><strong>Cast: </strong>{Actors}</p>
                        <p><strong>Runtime: </strong>{Runtime}</p>
                   </Card.Text>
               </Card.Body>
           </Card>
           </Col>
           <Button style={{marginTop:'3vh',marginLeft:'40vw'}} variant="dark" type="button" onClick={()=>history.push('/')}>Go Back To Search Page</Button>
       </Row>
   </Container>
    )
}

Movie.propTypes = {
movies:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    movies:state.movies
})

export default connect(mapStateToProps,{fetchMovie})(withRouter(Movie));
