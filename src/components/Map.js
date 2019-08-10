import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { MapController } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import VenueButton from "./VenueButton";

console.log(process.env.REACT_APP_MAPBOX_TOKEN);

export default function Map(props) {
  const mapController = new MapController();
  const [viewport, setViewport] = useState({
    latitude: 42.6977,
    longitude: 23.3219,
    zoom: 14,
    width: "100vw",
    height: "100vh"
  });

  //   Object deconstruction =
  const { item } = props;
  const [selectedVenue, setSelectedVenue] = useState(null);

  if (item.length > 0) {
    console.log(item);
    return (
      <div>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          controller={mapController}
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
          {item.map((marker, key) => {
            return (
              <Marker
                onClick={e => {
                  e.preventDefault();
                  setSelectedVenue(marker);
                }}
                key={key}
                latitude={marker.venue.location.lat}
                longitude={marker.venue.location.lng}
              >
                <VenueButton />
              </Marker>
            );
          })}
          {selectedVenue ? (
            <Popup
              latitude={selectedVenue.venue.location.lat}
              longitude={selectedVenue.venue.location.lng}
            >
              <div>Venue</div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    );
  }
  return <div>Loading</div>;
}
