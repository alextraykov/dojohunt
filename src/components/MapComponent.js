import React from "react";
import StaticMap from "react-map-gl";

export default function Map(props) {
    const test = {
        viewport: {
            width: 250,
            height: 250,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 9
        }
    };

    return (
        <StaticMap
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            {...test}
        />
    );
}
