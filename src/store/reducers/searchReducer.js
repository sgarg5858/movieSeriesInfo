import {SEARCH_MOVIE} from '../actions/types'

const initialState={
    //search text
    text:'',
    //Array of movies
    movies:[],
    //Loading State
    isLoading:false,
    // Selected Movie
    movie:[]
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
                isLoading:false
            }
        default:
            return state;
    }

}