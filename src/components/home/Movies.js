import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MovieItem from './MovieItem';

const Movies = ({movies}) => {
    
    return (
        movies.length === 0 ? null:
        movies.map((movie,index)=>{
            return <MovieItem key={index} movie={movie}/>
        })
    )
}

Movies.propTypes = {
    movies:PropTypes.array.isRequired
}
const mapStateToProps= state =>({
    movies:state.movies.movies
})

export default connect(mapStateToProps,{})(Movies)
