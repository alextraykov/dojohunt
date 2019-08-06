import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { thisExpression } from "@babel/types";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

export class MapContainer extends Component {
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
})(MapContainer);
