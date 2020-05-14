import React, { Component } from 'react';

import './App.css';
import CardList from './components/CardList';


class App extends Component {

  constructor(){
    super();

    this.state = {
      countries: []
    };
  }
  componentDidMount(){
    const allCountries = 'https://restcountries.eu/rest/v2/all';
    fetch(allCountries)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => this.setState({countries: data}));
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>Where in the World</h1>
        </header>
        <CardList countries={this.state.countries}/>
       
      </div>
    );
  }

}

export default App;
