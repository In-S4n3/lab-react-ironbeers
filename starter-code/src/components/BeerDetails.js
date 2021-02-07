import React, { Component } from 'react';
import Navbar from './Navbar';

export class BeerDetails extends Component {
  render() {
    const id = this.props.match.params.beerId;

    const beers = this.props.beers;

    const beer = beers.find((beer) => beer._id === id) || [];
    console.log(beer);
    return (
      <div>
        <Navbar />
        <div className="container2" style={{ textAlign: 'center' }}>
          <div>
            <img src={beer.image_url} alt="random beer" width="10%" />
          </div>
          <h1>{beer.name}</h1>
          <div className="smallContainer">
            <div>
              <h4>{beer.tagline}</h4>
            </div>
            <div>
              <h4>{beer.first_brewed}</h4>
            </div>
          </div>
          <br />
          <div>{beer.attenuation_level}</div>
          <br />
          <div className="text">{beer.description}</div>
          <br />
          <div>{beer.contributed_by}</div>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
