import {SEARCH_MOVIE, FETCH_MOVIES_ERROR, FETCH_MOVIES, FETCH_MOVIE,START_LOADING,STOP_LOADING} from '../actions/types'

const initialState={
    //search text
    text:'',
    //Array of movies
    movies:[],
    //Loading State
    isLoading:false,
    // Selected Movie
    movie:[],
    error:null
};

export default function(state=initialState,action)
{
    const{type,payload}=action;
    switch(type)
    {
        case SEARCH_MOVIE:
            return{
                ...state,
                text:payload,
                isLoading:false,
                error:null
            }
        case FETCH_MOVIES:
            return{
                ...state,
                movies:payload,
                isLoading:false,
                error:null
            }
        case FETCH_MOVIE:
            return{
                ...state,
                movie:payload,
                isLoading:false,
                error:null
            }
        case START_LOADING:
            return{
                ...state,
                isLoading:true,
                error:null
            }
        case STOP_LOADING:
            return{
                ...state,
                isLoading:false,
                error:null
            }
        case FETCH_MOVIES_ERROR:
            return{
                ...state,
                error:'Server Error',
                isLoading:false,
                movies:[]
            }
        
        default:
            return state;
    }

}