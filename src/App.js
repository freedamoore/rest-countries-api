import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import FilterBox from './components/FilterBox';
import Wrapper from './components/Wrapper';

import {setSearchField, setFilterField } from './redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    searchField: state.searchField,
    filterField: state.filterField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onFilterChange: (event) => dispatch(setFilterField(event.target.value))
  }
}

class App extends Component {

  constructor(){
    super();

    this.state = {
      countries: [],
      darkMode: false,
    };
  }

  toggleDarkMode = () =>{
    document.body.classList.toggle("light-mode");
    document.querySelector('.header').classList.toggle("header__light");
    this.setState({ darkMode: !this.state.darkMode})
 }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => this.setState({countries: data}));
  }

  render(){
    const { countries } = this.state;
    const { searchField, onSearchChange, filterField, onFilterChange } = this.props;

    const filteredRegion = countries.filter(country => {
      return country.region.toLowerCase().includes(filterField.toLowerCase());
    });

    const filteredCountries = filteredRegion.filter(country =>{
      return country.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if(!countries.length){
      return <h1>Loading...</h1>
    }
    else{  
      return (
        <div className="App">
          <Header toggleDarkMode={this.toggleDarkMode}/>
          <Wrapper>
            <SearchBox searchChange = { onSearchChange } />
            <FilterBox filterChange = { onFilterChange } />
          </Wrapper>
            <CardList countries={filteredCountries} isDarkMode={this.state.darkMode}/>
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
