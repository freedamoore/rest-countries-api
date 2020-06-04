import React from 'react';
import { Link } from 'react-router-dom';

import './CardList.scss';

import Card from './Card';

const CardList = ({countries, darkMode}) => (
    <div className="CardList">
    {
        countries.map((country, i) => {
            return (
                <Link to={'/rest-countries-api/' + country.alpha3Code} key={i} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Card darkMode={darkMode} 
                        country={countries[i].name} 
                        population={countries[i].population} 
                        region={countries[i].region} 
                        capital={countries[i].capital} 
                        flag={countries[i].flag}
                    />
                </Link>
            );
        })
    }
    </div>
);


export default CardList;