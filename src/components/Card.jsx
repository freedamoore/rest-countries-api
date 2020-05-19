import React from 'react';
import './Card.scss';

const Card = ({country, population, region, capital, flag, isDarkMode}) => {
    return (
        <div className="card" style={{backgroundColor: isDarkMode ? 'white': 'var(--color-dark-blue-1)'}}>
            <img className="card__img" src={ flag } alt="Country Flag" />
            <div className="card__txt">
                <h2>{ country }</h2>
                <p>Population: { population }</p>
                <p>Region: { region }</p>
                <p>Capital: { capital }</p>
            </div>
        </div>
    );
}

export default Card;