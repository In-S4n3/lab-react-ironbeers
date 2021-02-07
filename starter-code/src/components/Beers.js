import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export class Beers extends Component {
  state = {
    input: "",
  };

  handleSearch = (e) => {
    this.setState(
      {
        input: e.target.value,
      },
      () => {
        this.props.apiCall(this.state.input);
      }
    );
  };

  render() {
    console.log(this.props.input);
    return (
      <div>
        <nav
          style={{
            backgroundColor: "#03f0fc",
            textAlign: "center",
            height: "50px",
            margin: "0px 0px 25px 0px",
          }}
        >
          <Link to="/">
            <img src="images/home-icon.png" alt="" width="2%" />
          </Link>
        </nav>
        <div>
          <label>Search your beer here:</label>
          <br />
          <input
            type="search"
            value={this.state.input}
            onChange={this.handleSearch}
          />
        </div>
        <br />
        {this.props.beers.map((beer) => {
          //console.log(beer);
          return (
            <Link
              key={beer._id}
              to={`/beers/${beer._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="container">
                <div className="emptyDiv"></div>
                <div className=" beerImage">
                  <img src={beer.image_url} alt="beer" width="10%" />
                </div>
                <div className="beerText">
                  <h3 style={{ color: "black" }}>
                    <strong>{beer.name}</strong>
                  </h3>
                  <h3 style={{ color: "grey" }}>{beer.tagline}</h3>
                  <p style={{ color: "black" }}>
                    <b>Created by:</b> {beer.contributed_by}
                  </p>
                </div>
                <div className="emptyDiv"></div>
              </div>
              <br />
              <hr />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Beers;
