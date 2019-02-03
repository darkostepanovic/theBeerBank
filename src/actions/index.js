import axios from '../axios';
import {
    GET_BEERS_SEARCH_TERM,
    GET_BEERS,
    GET_BEERS_LOADING,
    GET_BEERS_ERROR,
    GET_BEERS_RESET,
    GET_BEERS_HAS_MORE,
    GET_BEERS_CHANGE_PAGE,
    GET_BEERS_NO_RESULTS,
    FAVORITE_ADD,
    FAVORITE_REMOVE,
    SHOW_MODAL,
    GET_SINGLE_BEER, LOADING_MODAL_DATA
} from "./types";

export const getBeers = (page, str) => async (dispatch, getState) => {
    const { beersData } = getState();
    const query = {
        page: page || 1,
        per_page: 6
    };
    if( beersData.term !== '') { query.beer_name = beersData.term }
    try {
        dispatch({ type: GET_BEERS_LOADING, payload: true });
        const res = await axios.get('/beers', {
            params: {
                ...query
            }
        });
        if ( res.data.length === 0) {
            // determine if search typed or scroll event
            if(str) {
                dispatch({ type: GET_BEERS_NO_RESULTS, payload: true});
                dispatch({ type: GET_BEERS_RESET });
            }
            dispatch({ type: GET_BEERS_HAS_MORE, payload: false });
            dispatch({ type: GET_BEERS_LOADING, payload: false });
            return
        }
        if ( !page ) dispatch({ type: GET_BEERS_RESET });
        dispatch({ type: GET_BEERS_NO_RESULTS, payload: false});
        dispatch({ type: GET_BEERS, payload: res.data });
        dispatch({ type: GET_BEERS_HAS_MORE, payload: true });
        dispatch({ type: GET_BEERS_LOADING, payload: false });
    } catch (e) {
        dispatch({ type: GET_BEERS_ERROR, payload: e.message });
        dispatch({ type: GET_BEERS_LOADING, payload: false });
    }
};
export const handleSearchInput = e => dispatch => {
    dispatch({type: GET_BEERS_SEARCH_TERM, payload: e});
}
export const handleChangePage = page => ({ type: GET_BEERS_CHANGE_PAGE, payload: page});
export const resetBeers = () => ({ type: GET_BEERS_RESET });

export const addFavorite = (id) => ({type: FAVORITE_ADD, payload: id});
export const removeFavorite = (id) => ({type: FAVORITE_REMOVE, payload: id});

export const getSingleBeer = id => async dispatch => {
    dispatch({ type: LOADING_MODAL_DATA, payload: true });
    dispatch({ type: SHOW_MODAL, payload: true});
    try {
        const res = await axios.get(`/beers/${id}`);
        dispatch({ type: GET_SINGLE_BEER, payload: res.data[0]});
        dispatch({ type: LOADING_MODAL_DATA, payload: false });
    } catch (e) {
        // find a better way to handle error
        dispatch({ type: LOADING_MODAL_DATA, payload: false });
        alert(e.message)
    }
};
export const closeModal = () => ({ type: SHOW_MODAL, payload: false });