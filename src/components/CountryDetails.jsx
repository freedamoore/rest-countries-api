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

        const getBorderCountries = (arr) =>{
            return (typeof arr !== 'undefined') ? 
            arr.map(item => <span className="CountryDetails__border-countries">{item} </span>) : 
            null;
        }

        return (
            <div className="CountryDetails">
                <Link to={'/rest-countries-api/'} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <button className="CountryDetails__btn">&larr; Back</button>
                </Link>
                <div className="CountryDetails__body">
                    <div className="CountryDetails__img-section">
                        <img className="CountryDetails__img"src={countryDetails.flag} alt="flag"/>
                    </div>
                    <div className="CountryDetails__txt-section">
                        <div>
                            <h1 className="CountryDetails__country-heading">{countryDetails.name}</h1>
                        </div>
                        <div className="CountryDetails__facts">
                            <div className="CountryDetails__facts--1">
                                <p><strong>Native Name:</strong> {countryDetails.nativeName} </p>
                                <p><strong>Population:</strong> {numberWithCommas(countryDetails.population)} </p>
                                <p><strong>Region:</strong> {countryDetails.region}</p>
                                <p><strong>Sub Region:</strong> {countryDetails.subregion}</p>
                                <p><strong>Capital:</strong> {countryDetails.capital}</p>
                            </div>
                            <div className="CountryDetails__facts--2">
                                <p><strong>Top Level Domain:</strong> {countryDetails.topLevelDomain}</p>
                                <p><strong>Currencies:</strong> {getArrayObjectItems(countryDetails.currencies)}</p>
                                <p><strong>Languages:</strong> {getArrayObjectItems(countryDetails.languages)}</p>
                            </div>
                        </div>
                        <div className="CountryDetails__border">
                            <div><strong>Border Countries: </strong></div>
                            <div> {getBorderCountries(countryDetails.borders)}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CountryDetails;