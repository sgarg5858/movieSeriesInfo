import {SEARCH_MOVIE,FETCH_MOVIES,FETCH_MOVIE, FETCH_MOVIES_ERROR,START_LOADING,STOP_LOADING} from './types';
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
        dispatch({type:START_LOADING})

        const res= await axios.get(`https://www.omdbapi.com/?apikey=${APIkey}&s=${text}`);
        
        console.log(res);
        dispatch({type:STOP_LOADING})

        if(res.data.Response==='False')
        {
            dispatch({
                type:FETCH_MOVIES_ERROR
            })
        }
        else
        {
            dispatch({
                type:FETCH_MOVIES,
                payload:res.data.Search
            })
           
        }
        
    } catch (error) {
        console.log(error.response);
        dispatch({
            type:FETCH_MOVIES_ERROR
        })
    }
}

export const fetchMovie = (imdbID) => async dispatch =>{
    try {
        
        dispatch({type:START_LOADING})
        
        const res = await axios.get(`https://www.omdbapi.com/?apikey=${APIkey}&i=${imdbID}`);
        
        dispatch({type:STOP_LOADING})

        if(res.data.Response==='False')
        {
            dispatch({
                type:FETCH_MOVIES_ERROR
            })
        }
        else
        {
            dispatch({
                type:FETCH_MOVIE,
                payload:res.data
            })
           
        }
        
       
    } catch (error) {
        console.log(error.response);
        dispatch({
            type:FETCH_MOVIES_ERROR
        })
    }
}
