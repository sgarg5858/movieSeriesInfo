import {SEARCH_MOVIE,FETCH_MOVIES, FETCH_MOVIES_ERROR} from './types';
import axios from 'axios';
import {APIkey} from '../../APIKey';
export const searchMovie = (text) => dispatch => {
    
    dispatch({
        type:SEARCH_MOVIE,
        payload:text
    });
}

export const fetchMovies = (text) => async dispatch => {
    
    try {
        const res= await axios.get(`http://www.omdbapi.com/?apikey=${APIkey}&s=${text}`);
        dispatch({
            type:FETCH_MOVIES,
            payload:res.data.Search
        })
    } catch (error) {
        console.log(error.response);
        dispatch({
            type:FETCH_MOVIES_ERROR
        })
    }
}