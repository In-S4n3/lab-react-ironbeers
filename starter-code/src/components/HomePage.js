import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <nav
          style={{
            backgroundColor: '#03f0fc',
            textAlign: 'center',
            height: '50px',
            margin: '0px 0px 25px 0px',
          }}
        >
          <img src="images/home-icon.png" alt="" width="5%" />
        </nav>
        <div style={{ textAlign: 'center' }}>
          <img src="/images/beers.png" alt="beer" />
          <div>
            <Link to="/beers">
              <h1>All Beers</h1>
            </Link>
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h4>
          </div>
          <img src="/images/random-beer.png" alt="beer" />
          <div>
            <Link to="/random-beer">
              <h1>Random Beer</h1>
            </Link>
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h4>
          </div>
          <img src="/images/new-beer.png" alt="beer" />
          <div>
            <Link to="/new-beer">
              <h1>New Beer</h1>
            </Link>

            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
