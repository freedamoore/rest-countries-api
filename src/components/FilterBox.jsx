import React from 'react';
import './FilterBox.scss';
const FilterBox = ({ filterChange }) => (
    <select className="filterBox" id="continents" name="continents" onChange={ filterChange }>
        <option value=""> Filter by Region </option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="america">America</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
    </select>
);

export default FilterBox;