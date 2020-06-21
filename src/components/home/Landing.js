import React from 'react'
import PropTypes from 'prop-types'
import SearchForm from './SearchForm';
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner';
import Movies from './Movies';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Landing = ({isLoading,error}) => {

    return (
        <Container fluid style={{marginTop:'3vh'}}>
            <SearchForm/>
          <Row style={{marginTop:'3vh',justifyContent:'center'}} >  {isLoading ? <Spinner/> : <Movies/>}</Row>
        </Container>
    )
}

Landing.propTypes = {

}

const mapStateToProps= state => ({
    isLoading:state.movies.isLoading,
    error:state.movies.error
})

export default connect(mapStateToProps,{})(Landing)
