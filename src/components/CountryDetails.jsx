import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../utilities.js';

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

        // Some fields return an array of objects. Use this function to retrieve and display them
        const getArrayObjectItems = (arr) =>{
            return (typeof arr !== 'undefined') ? 
            arr.map(item => <span>{item.name} </span>) : 
            null;
        }

        return (
            <div className="CountryDetails">
                <Link to={'/rest-countries-api/'} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <button className="CountryDetails__btn">&larr; Back</button>
                </Link>
                <div className="CountryDetails__body">
                    <div>
                        <img className="CountryDetails__img"src={countryDetails.flag} alt="flag"/>
                    </div>
                    <div>
                        <div>
                            <h1>{countryDetails.name}</h1>
                        </div>
                        <div className="CountryDetails__facts">
                            <div className="CountryDetails__facts--1">
                                <p>Native Name: {countryDetails.nativeName} </p>
                                <p>Population: {numberWithCommas(countryDetails.population)} </p>
                                <p>Region: {countryDetails.region}</p>
                                <p>Sub Region: {countryDetails.subregion}</p>
                                <p>Capital: {countryDetails.capital}</p>
                            </div>
                            <div className="CountryDetails__facts--2">
                                <p>Top Level Domain: {countryDetails.topLevelDomain}</p>
                                <p>Currencies: {getArrayObjectItems(countryDetails.currencies)}</p>
                                <p>Languages: {getArrayObjectItems(countryDetails.languages)}</p>
                            </div>
                        </div>
                        <div className="CountryDetails__border">
                            <div>Border Countries</div>
                            <div>: countryDetails.borders</div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CountryDetails;