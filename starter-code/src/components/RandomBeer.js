import React, { Component } from 'react';

import axios from 'axios';
import '../App.css';
import Navbar from './Navbar';

export class RandomBeer extends Component {
  state = {
    randomBeer: [],
  };

  componentDidMount = () => {
    // console.log("did mount");
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        //console.log('api response', response.data);
        this.setState({ randomBeer: response.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    let randomBeer = this.state.randomBeer;

    if (this.state.randomBeer.length < 0) {
      <div>LOADING</div>;
    }

    return (
      <div>
        <Navbar />
        <div className="container2" style={{ textAlign: 'center' }}>
          <div>
            <img src={randomBeer.image_url} alt="random beer" width="5%" />
          </div>
          <h1>{randomBeer.name}</h1>
          <div className="smallContainer">
            <div>
              <h4>{randomBeer.tagline}</h4>
            </div>
            <div>
              <h4>{randomBeer.first_brewed}</h4>
            </div>
          </div>
          <br />
          <div>{randomBeer.attenuation_level}</div>
          <br />
          <div className="text">{randomBeer.description}</div>
          <br />
          <div>{randomBeer.contributed_by}</div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
