import React from 'react';
import './CardList.scss';

import Card from './Card';

const CardList = ({countries}) => (
    <div className="CardList">
    {
        countries.map((country, i) => {
            return (<Card key={i}
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