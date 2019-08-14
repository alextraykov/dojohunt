import React, { useState } from "react";
import Map from "./Map";
import axios from "axios";
import VenuePage from "../pages/VenuePage";
const queryStrings = ["martial arts", "boxing", "karate"];

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     latlong: "",
  //     venues: [],
  //     venueID: undefined,
  //     imgUrl: ""
  //   };
  // }

  // componentDidMount = () => {
  //   this.getGeolocation();
  //   this.getVenueImage();
  // };

  // getGeolocation = () => {
  //   navigator.geolocation.getCurrentPosition(response => {
  //     const latlong =
  //       response.coords.latitude + "," + response.coords.longitude;
  //     this.getVenues(latlong);
  //   });
  // };

  // getURLParams = queryString => {
  //   return {
  //     client_id: "WEA5DGFHYPFUZDSRT3PJSZLC0TTZKDOCHJMRE2HQWYECNZMD",
  //     client_secret: "NJQQBRJFHK5V54QL1XNVJ1YCIPDCQYV1BC02G5SBPXKGBHTD",
  //     ll: "42.6977, 23.3219",
  //     query: queryString,
  //     v: "20180323"
  //   };
  // };

  // getImgParams = () => {
  //   return {
  //     client_id: "WEA5DGFHYPFUZDSRT3PJSZLC0TTZKDOCHJMRE2HQWYECNZMD",
  //     client_secret: "NJQQBRJFHK5V54QL1XNVJ1YCIPDCQYV1BC02G5SBPXKGBHTD",
  //     v: "20180323"
  //   };
  // };

  // getVenueImage = () => {
  //   const client_id = "WEA5DGFHYPFUZDSRT3PJSZLC0TTZKDOCHJMRE2HQWYECNZMD";
  //   const client_secret = "NJQQBRJFHK5V54QL1XNVJ1YCIPDCQYV1BC02G5SBPXKGBHTD";
  //   const v = "20180323";
  //   const venueID = "4e6e469e45dd293273cdf587";
  //   const endPoint = `https://api.foursquare.com/v2/venues/${venueID}/photos?client_id=${client_id}&client_secret=${client_secret}&v=${v}`;
  //   axios
  //     .get(endPoint)
  //     .then(response => {
  //       const { items } = response.data.response.photos;
  //       let imgUrl = "";
  //       imgUrl = `${items[0].prefix}${items[0].width}x${items[0].height}${
  //         items[0].suffix
  //       }`;
  //       this.setState({
  //         imgUrl
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  // getVenues = latlong => {
  //   let stateObj = [];
  //   const endPoint = "https://api.foursquare.com/v2/venues/explore?";
  //   axios
  //     .all([
  //       axios.get(
  //         endPoint + new URLSearchParams(this.getURLParams(queryStrings[0]))
  //       ),
  //       axios.get(
  //         endPoint + new URLSearchParams(this.getURLParams(queryStrings[1]))
  //       ),
  //       axios.get(
  //         endPoint + new URLSearchParams(this.getURLParams(queryStrings[2]))
  //       )
  //     ])
  //     .then(response => {
  //       response.forEach(responseElement => {
  //         stateObj.push(responseElement.data.response.groups[0].items);
  //       });
  //       this.setState({
  //         venues: stateObj,
  //         venueID: stateObj[0][0].venue.id
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  render() {
    // console.log(this.state.imgUrl);
    return (
      <div>
        {/* {this.state.imgUrl.length > 0 && ( */}
        {/* <img src={this.state.imgUrl} alt="test" />
        )} */}
        {/* <Map item={this.state.venues} /> */}
        <VenuePage />
      </div>
    );
  }
}
export default App;
