import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MovieItem from './MovieItem';

const Movies = ({movies,error,text}) => {

    if(error!==null)
    {
        return <h2 style={{color:'red'}}>No Movies Found</h2>;
    }
    return (

       ! movies || movies.length === 0 ?null:
        movies.map((movie,index)=>{
            return <MovieItem key={index} movie={movie}/>
        })
    )
}

Movies.propTypes = {
    movies:PropTypes.array.isRequired
}
const mapStateToProps= state =>({
    movies:state.movies.movies,
    error:state.movies.error,
    text:state.movies.text
})

export default connect(mapStateToProps,{})(Movies)
