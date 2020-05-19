import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import FilterBox from './components/FilterBox';
import Scroll from './components/Scroll';
import Wrapper from './components/Wrapper';

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
    const filteredRegion = this.state.countries.filter(country => {
      return country.region.toLowerCase().includes(this.state.filterField.toLowerCase());
    });

    const filteredCountries = filteredRegion.filter(country =>{
      return country.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    if(!this.state.countries.length){
      return <h1>Loading...</h1>
    }
    else{  
      return (
        <div className="App">
          <Header toggleDarkMode={this.toggleDarkMode}/>
          <Wrapper>
            <SearchBox searchChange = { this.onSearchChange } />
            <FilterBox filterChange = { this.onFilterChange } />
          </Wrapper>
          {/* <Scroll> */}
            <CardList countries={filteredCountries} isDarkMode={this.state.darkMode}/>
          
          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://freedamoore.github.io/" target="_blank">Freeda Moore</a>.
          </div>
          {/* </Scroll> */}
        </div>
      );
    }
  }

}

export default App;
