import {
    GET_BEERS, GET_BEERS_CHANGE_PAGE,
    GET_BEERS_ERROR, GET_BEERS_HAS_MORE,
    GET_BEERS_LOADING, GET_BEERS_NO_RESULTS,
    GET_BEERS_RESET, GET_BEERS_SEARCH_TERM
} from "../actions/types";

const initialState = {
    loading: false,
    hasMore: true,
    noResults: false,
    page: 1,
    term: '',
    beers: [],
    error: ''
};

const beers = (state = initialState, action) => {
    switch (action.type) {
        case GET_BEERS:
            return {
                ...state,
                beers: [
                    ...state.beers,
                    ...action.payload
                ]
            };
        case GET_BEERS_SEARCH_TERM:
            return {
                ...state,
                term: action.payload
            };
        case GET_BEERS_NO_RESULTS:
            return {
                ...state,
                noResults: action.payload
            }
        case GET_BEERS_CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            };
        case GET_BEERS_HAS_MORE:
            return {
                ...state,
                hasMore: action.payload
            };
        case GET_BEERS_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case GET_BEERS_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case GET_BEERS_RESET:
            return {
                ...state,
                beers: [],
                page: 1
            };
        default:
            return state
    }
};

export default beers