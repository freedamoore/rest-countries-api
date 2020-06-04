import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import FilterBox from './components/FilterBox';
import Wrapper from './components/Wrapper';
import CountryDetails from './components/CountryDetails';

import {setSearchField, setFilterField, requestCountries, toggleDarkMode } from './redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    searchField: state.searchCountries.searchField,
    filterField: state.searchCountries.filterField,
    countries: state.requestCountries.countries,
    isPending: state.requestCountries.isPending,
    error: state.requestCountries.error,
    darkMode: state.toggleDarkMode.darkMode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onFilterChange: (event) => dispatch(setFilterField(event.target.value)),
    onRequestCountries: () => dispatch(requestCountries()),
    toggleDarkMode: () => dispatch(toggleDarkMode())
  }
}

class App extends Component {

  componentDidMount(){
    this.props.onRequestCountries();
  }

  render(){
  
    const { searchField, onSearchChange, filterField, onFilterChange, darkMode, countries, isPending, toggleDarkMode } = this.props;

    const filteredRegion = countries.filter(country => {
      return country.region.toLowerCase().includes(filterField.toLowerCase());
    });

    const filteredCountries = filteredRegion.filter(country =>{
      return country.name.toLowerCase().includes(searchField.toLowerCase());
    });

    // if(!countries.length){
    if (isPending){
      return <h1>Loading...</h1>
    }
    else{  
      return (
        <div className="App">
          <Header toggleDarkMode={toggleDarkMode} />
          <BrowserRouter>
            <Switch>
              <Route path='/rest-countries-api' exact>
                <Wrapper>
                  <SearchBox searchChange = { onSearchChange } />
                  <FilterBox filterChange = { onFilterChange } />
                </Wrapper>
                <CardList countries={filteredCountries} darkMode={darkMode}/>
              </Route>
              <Route path='/rest-countries-api/:country' component={CountryDetails} />            
            </Switch>
          </BrowserRouter>
          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://freedamoore.github.io/" target="_blank">Freeda Moore</a>.
          </div>
        </div>
      );
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
