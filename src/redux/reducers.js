import {CHANGE_SEARCH_FIELD, CHANGE_FILTER_FIELD} from './constants.js'

const initialState = {
    searchField: '',
    filterField: ''
}

export const searchCountries = (state=initialState, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        case CHANGE_FILTER_FIELD:
            return Object.assign({}, state, {filterField: action.payload});
        default:
            return state;
    }
}