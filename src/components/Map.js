import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { MapController } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import VenueButton from "./VenueButton";

export default function Map(props) {
    const mapController = new MapController();
    const [viewport, setViewport] = useState({
        latitude: 42.6977,
        longitude: 23.3219,
        zoom: 12,
        width: "100vw",
        height: "100vh"
    });

    const testFunction = (e, marker) => {
        e.preventDefault();
        setSelectedVenue(marker);
    };

    const { item } = props;
    const [selectedVenue, setSelectedVenue] = useState(null);

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
                {item.map((item, key) => {
                    return item.map((marker, key) => {
                        return (
                            <Marker
                                key={key}
                                latitude={marker.venue.location.lat}
                                longitude={marker.venue.location.lng}
                            >
                                <VenueButton
                                    onClick={e => testFunction(e, marker)}
                                />
                            </Marker>
                        );
                    });
                })}
                {selectedVenue ? (
                    <Popup
                        latitude={selectedVenue.venue.location.lat}
                        longitude={selectedVenue.venue.location.lng}
                        onClose={() => {
                            setSelectedVenue(null);
                        }}
                    >
                        <div>
                            <h2>{selectedVenue.venue.name}</h2>
                            <button>View More</button>
                        </div>
                    </Popup>
                ) : null}
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
