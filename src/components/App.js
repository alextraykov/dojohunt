import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import SearchBar from "./SearchBar";
import axios from "axios";

export class App extends Component {
  state = {
    venues: []
  };

  componentWillMount() {
    this.getVenues();
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "WEA5DGFHYPFUZDSRT3PJSZLC0TTZKDOCHJMRE2HQWYECNZMD",
      client_secret: "NJQQBRJFHK5V54QL1XNVJ1YCIPDCQYV1BC02G5SBPXKGBHTD",
      query: "martial arts",
      near: "Sofia",
      v: "20180323"
    };

    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({ venues: response.data.response.groups[0].items });
      })
      .catch(error => {
        console.log("ERROR! " + error);
      });
  };

  render() {
    return (
      <div className="">
        <SearchBar />
        <Map
          google={this.props.google}
          zoom={14}
          className="ui container"
          initialCenter={{
            lat: 42.6977,
            lng: 23.3219
          }}
        />
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDZFmCp6JqYrar3BxIy4XP5N-RC00Hqw6Q"
})(App);
