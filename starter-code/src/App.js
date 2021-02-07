import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import HomePage from './components/HomePage';
import Beers from './components/Beers';
import { Route, Switch } from 'react-router-dom';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

export class App extends Component {
  state = {
    beers: [],
  };

  apiCall = (value) => {
    console.log(value);
    let url =
      value !== undefined
        ? `https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`
        : 'https://ih-beers-api2.herokuapp.com/beers';
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log('api response', response.data);
        this.setState({ beers: response.data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.apiCall();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/beers"
            exact
            render={(props) => {
              return (
                <Beers
                  {...props}
                  beers={this.state.beers}
                  apiCall={this.apiCall}
                />
              );
            }}
          />
          <Route
            exact
            path="/beers/:beerId"
            render={(props) => {
              return <BeerDetails {...props} beers={this.state.beers} />;
            }}
          />
          <Route
            exact
            path="/random-beer"
            render={(props) => {
              return <RandomBeer />;
            }}
          />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
