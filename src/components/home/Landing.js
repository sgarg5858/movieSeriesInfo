import React from 'react'
import PropTypes from 'prop-types'
import SearchForm from './SearchForm';
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner';
import Movies from './Movies';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Landing = ({isLoading}) => {
    return (
        <Container fluid style={{marginTop:'3vh'}}>
            <SearchForm/>
          <Row style={{marginTop:'3vh'}}>  {isLoading ? <Spinner/> : <Movies/>}</Row>
        </Container>
    )
}

Landing.propTypes = {

}

const mapStateToProps= state => ({
    isLoading:state.movies.isLoading
})

export default connect(mapStateToProps,{})(Landing)
