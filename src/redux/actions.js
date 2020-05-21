import {
    CHANGE_SEARCH_FIELD,
    CHANGE_FILTER_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    TOGGLE_DARK_MODE
} from './constants.js'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const setFilterField = (text) =>({
    type: CHANGE_FILTER_FIELD,
    payload: text
});

export const requestCountries = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error }))
}

export const toggleDarkMode = () =>({
    type: TOGGLE_DARK_MODE
});