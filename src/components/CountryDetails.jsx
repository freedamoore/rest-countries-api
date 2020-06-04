import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CountryDetails.scss';

class CountryDetails extends Component{
    constructor(){
        super();

        this.state={
            countryDetails: {}
        };
    }
    componentDidMount(){
        const coutnryCode = this.props.match.params.country;
        const url = 'https://restcountries.eu/rest/v2/alpha/' + coutnryCode;
        fetch(url)
        .then(response => response.json())
        // .then(country=> console.log(country));
         .then(country => this.setState({countryDetails: country}));
    }
    
    render(){
        const { countryDetails } = this.state;
        return (
            <div className="CountryDetails">
                <Link to={'/rest-countries-api/'} style={{ color: 'inherit', textDecoration: 'none' }}>
                    Back
                </Link>
                
                <h1>{countryDetails.name}</h1>
            </div>
        );
    }
}

export default CountryDetails;