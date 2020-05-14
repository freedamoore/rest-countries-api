import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import FilterBox from './components/FilterBox';

class App extends Component {

  constructor(){
    super();

    this.state = {
      countries: [],
      darkMode: false,
      searchField:'',
      filterField:''
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  onFilterChange = (event) => {
    console.log(event.target.value);
    this.setState({ filterField: event.target.value });
  }

  componentDidMount(){
    const allCountries = 'https://restcountries.eu/rest/v2/all';
    fetch(allCountries)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => this.setState({countries: data}));
  }

  render(){
    const filteredRegion = this.state.countries.filter(country => {
      return country.region.toLowerCase().includes(this.state.filterField.toLowerCase());
    });

    const filteredCountries = filteredRegion.filter(country =>{
      return country.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="App">
        <Header />
        <SearchBox searchChange = { this.onSearchChange } />
        <FilterBox filterChange = { this.onFilterChange } />
        <CardList countries={filteredCountries}/>
       
      </div>
    );
  }

}

export default App;
