import React, { useState } from "react";
import Map from "./Map";
import axios from "axios";

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

  getVenues = latlong => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const params = {
      client_id: "WEA5DGFHYPFUZDSRT3PJSZLC0TTZKDOCHJMRE2HQWYECNZMD",
      client_secret: "NJQQBRJFHK5V54QL1XNVJ1YCIPDCQYV1BC02G5SBPXKGBHTD",
      ll: "42.6977, 23.3219 ",
      query: "coffee",
      v: "20180323"
    };
    axios
      .get(endPoint + new URLSearchParams(params))
      .then(response => {
        console.log(response);
        this.setState({ venues: response.data.response.groups[0].items });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    // console.log(this.state.venues);
    return (
      <div>
        <Map item={this.state.venues} />
      </div>
    );
  }
}
export default App;
