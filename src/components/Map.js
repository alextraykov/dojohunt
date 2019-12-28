import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import VenueButton from "./VenueButton";

export default function Map(props) {
    const [viewport, setViewport] = useState({
        latitude: 42.6977,
        longitude: 23.3219,
        zoom: 12,
        width: "100vw",
        height: "100vh"
    });

    const { item } = props;
    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            >
                <Marker
                    latitude={viewport.latitude}
                    longitude={viewport.longitude}
                >
                    <VenueButton />
                </Marker>
            </ReactMapGL>
        </div>
    );
}
// return (
//     <div className="ui">
//         <div className="ui active inverted dimmer">
//             <div className="ui text loader">Discovering Dojos</div>
//         </div>
//     </div>
// );
