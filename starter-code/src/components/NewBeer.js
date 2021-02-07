import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';
import Navbar from './Navbar';

export class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: '',
      newTagLine: '',
      newContributor: '',
      newDescription: '',
      newFirstBrewed: '',
      newBrewerTips: '',
      newAttenuation: '',
      newcontributed: '',
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNew = (e) => {
    e.preventDefault();
    const { newName, newTagLine, newContributor } = this.state;
    const newBeer = {
      name: newName,
      tagline: newTagLine,
      contributed_by: newContributor,
    };

    console.log(newBeer);
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then(() => {
        // console.log("redirecting....");
        // this is how you redirect
        this.props.history.push('/beers');
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="form-container">
          <form onSubmit={this.addNew}>
            <label>Name: </label>
            <input
              value={this.state.newName}
              name="newName"
              onChange={this.handleInput}
            />
            <br />
            <label>Tagline: </label>
            <input
              value={this.state.newTagLine}
              name="newTagLine"
              onChange={this.handleInput}
            />
            <br />
            <label>Description: </label>
            <input
              value={this.state.newDescription}
              name="newDescription"
              onChange={this.handleInput}
            />
            <br />
            <label>First Brewed: </label>
            <input
              value={this.state.newFirstBrewed}
              name="newFirstBrewed"
              onChange={this.handleInput}
            />
            <br />
            <label>Attenuation Level: </label>
            <input
              value={this.state.newAttenuation}
              name="newAttenuation"
              onChange={this.handleInput}
            />
            <br />
            <label>Contributor: </label>
            <input
              value={this.state.newContributor}
              name="newContributor"
              onChange={this.handleInput}
            />
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewBeer;
