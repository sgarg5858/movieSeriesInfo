import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux';
import {searchMovie,fetchMovies} from '../../store/actions/searchActions';

const SearchForm = ({searchMovie,fetchMovies,text}) => {


    const[searchText,setSearchText]=useState('');

   const setValueSearchText = (event)=>
   {
        setSearchText(event.target.value);
   }
   useEffect(()=>{
    searchMovie(searchText);   
   },[searchText])

    return (
            <Row style={{alignContent:'center'}}>
                <Col lg={{span:12}} md={{span:12}} sm={{span:12}} xs={{span:12}}>
                <Card bg="dark" text="white" style={{textAlign:'center'}}>
                    <Card.Title style={{marginTop:'2vh'}}>Search For Movies or Tv Series</Card.Title>
                    <Card.Body >
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control 
                            type="text" 
                            value={searchText} 
                            onChange={(event)=>setValueSearchText(event)} 
                            placeholder="Search For a movie or any Tv Series " 
                            
                            />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={()=>fetchMovies(text)} >
                            Search
                        </Button>
                    </Form>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            
    )
}

SearchForm.propTypes = {
    text:PropTypes.object.isRequired,
    searchMovie:PropTypes.func.isRequired,
    fetchMovies:PropTypes.func.isRequired
}

const mapStateToProps = state  => ({
    text : state.movies.text 
})

export default connect(mapStateToProps,{searchMovie,fetchMovies})(SearchForm)
