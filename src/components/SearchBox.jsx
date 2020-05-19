import React from 'react';
import './SearchBox.scss';

const SearchBox = ({ searchChange }) => (
    <input className="searchBox" 
        type='search' 
        placeholder='Search for a country...'
        onChange={searchChange}
     />
);

export default SearchBox;