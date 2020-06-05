import React from 'react';
import { numberWithCommas } from '../utilities.js';
import './Card.scss';

const Card = ({country, population, region, capital, flag, darkMode}) => {
    const color = darkMode? 'var(--color-dark-blue-1)': 'white';
    return (
        <div className="card" style={{backgroundColor: color}}>
            <img className="card__img" src={ flag } alt="Country Flag" />
            <div className="card__txt">
                <h2>{ country }</h2>
                <p>Population: { numberWithCommas(population) }</p>
                <p>Region: { region }</p>
                <p>Capital: { capital }</p>
            </div>
        </div>
    );
}

export default Card;