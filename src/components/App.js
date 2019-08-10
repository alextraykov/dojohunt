import React, { useState } from "react";
import Map from "./Map";
import axios from "axios";

const queryStrings = ["kickboxing", "bjj", "judo", "karate"];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latlong: "",
      venues: [] 
    };
  }

  componentDidMount = () => {
    this.getGeolocation();
  };

  getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(response => {
      const latlong =
        response.coords.latitude + "," + response.coords.longitude;
      this.getVenues(latlong);
    });
  };

  getURLParams = queryString => {
    return {
      client_id: "WEA5DGFHYPFUZDSRT3PJSZLC0TTZKDOCHJMRE2HQWYECNZMD",
      client_secret: "NJQQBRJFHK5V54QL1XNVJ1YCIPDCQYV1BC02G5SBPXKGBHTD",
      ll: "42.6977, 23.3219",
      query: queryString,
      v: "20180323"
    };
  }

  getVenues = latlong => {
    let stateObj = [];
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
      axios.all([
        axios.get(endPoint + new URLSearchParams(this.getURLParams(queryStrings[0]))),
        axios.get(endPoint + new URLSearchParams(this.getURLParams(queryStrings[1]))),
      ])
      .then(response => {
        // console.log(response);
        response.forEach(responseElement => {
          stateObj.push(responseElement.data.response.groups[0].items);
        })
        this.setState({ venues: stateObj })
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Map item={this.state.venues} />
      </div>
    );
  }
}
export default App;
