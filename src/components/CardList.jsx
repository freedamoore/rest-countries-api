import React from 'react';
import './CardList.scss';

import Card from './Card';

const CardList = ({countries, isDarkMode}) => (
    <div className="CardList">
    {
        countries.map((country, i) => {
            return (<Card isDarkMode={isDarkMode} 
                    key={i}
                    country={countries[i].name} 
                    population={countries[i].population} 
                    region={countries[i].region} 
                    capital={countries[i].capital} 
                    flag={countries[i].flag}
                />
            );
        })
    }
    </div>
);


export default CardList;