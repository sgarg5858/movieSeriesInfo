import {SEARCH_MOVIE} from './types';
import axios from 'axios';

export const searchMovie = (text) => dispatch => {
    
    dispatch({
        type:SEARCH_MOVIE,
        payload:text
    });
}