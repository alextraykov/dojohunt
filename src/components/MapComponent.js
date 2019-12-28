import React from "react";
import StaticMap from "react-map-gl";

export default class Map extends React.Component {
    state = {
        viewport: {
            width: 250,
            height: 250,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 9
        }
    };

    render() {
        return (
            <StaticMap
                captureScroll={true}
                captureDrag={true}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                {...this.state.viewport}
                // Commit changes:
                // Removed onViewportChange handler as we don't want the map to move
                // on the card.
            />
        );
    }
}
