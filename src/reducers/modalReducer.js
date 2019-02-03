import {GET_SINGLE_BEER, LOADING_MODAL_DATA, SHOW_MODAL} from '../actions/types'

const initialState = {
    showModal: false,
    loadingModalData: false,
    modalData: {}
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                showModal: action.payload
            };
        case GET_SINGLE_BEER:
            return {
                ...state,
                modalData: {
                    ...state.modalData,
                    ...action.payload
                }
            };
        case LOADING_MODAL_DATA:
            return {
                ...state,
                loadingModalData: action.payload
            };
        default:
            return {
                ...state
            }
    }
};

export default modalReducer