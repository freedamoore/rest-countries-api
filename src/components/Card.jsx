import React from 'react';
import './Card.scss';

const Card = ({country, population, region, capital, flag}) => {
    return (
        <div className="Card">
            <img className="Card__img" src={ flag } alt="Country Flag" />
            <div className="Card__txt">
                <h2>{ country }</h2>
                <p>Population: { population }</p>
                <p>Region: { region }</p>
                <p>Capital: { capital }</p>
            </div>
        </div>
    );
}

export default Card;