import { combineReducers } from 'redux'

import beerReducer from './beersReducer'
import favoritesReducer from './favoritesReducer'
import modalReducer from "./modalReducer";

export default combineReducers({
    beersData: beerReducer,
    favorites: favoritesReducer,
    modal: modalReducer
})