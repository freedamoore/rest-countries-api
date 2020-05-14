import React from 'react';

const SearchBox = ({ searchChange }) => (
    <input type='search' 
        placeholder='Search for a country...'
        onChange={searchChange}
     />
);

export default SearchBox;