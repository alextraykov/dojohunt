import React, { useState } from "react";
import withPlaces from "../HOCs/withPlaces";
import GymItem from "../components/GymItem";
import VenueList from "../pages/VenueList";
// const queryStrings = ["martial arts", "boxing", "karate"];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test: undefined
        };
    }

    //     this.state = {
    //         location: [
    //             {
    //                 id: 0,
    //                 title: "New York",
    //                 selected: false,
    //                 key: "location"
    //             },
    //             {
    //                 id: 1,
    //                 title: "Dublin",
    //                 selected: false,
    //                 key: "location"
    //             },
    //             {
    //                 id: 2,
    //                 title: "California",
    //                 selected: false,
    //                 key: "location"
    //             },
    //             {
    //                 id: 3,
    //                 title: "Istanbul",
    //                 selected: false,
    //                 key: "location"
    //             },
    //             {
    //                 id: 4,
    //                 title: "Izmir",
    //                 selected: false,
    //                 key: "location"
    //             },
    //             {
    //                 id: 5,
    //                 title: "Oslo",
    //                 selected: false,
    //                 key: "location"
    //             },
    //             {
    //                 id: 6,
    //                 title: "Zurich",
    //                 selected: false,
    //                 key: "location"
    //             }
    //         ],
    //         fruit: [
    //             {
    //                 id: 0,
    //                 title: "Apple",
    //                 selected: false,
    //                 key: "fruit"
    //             },
    //             {
    //                 id: 1,
    //                 title: "Orange",
    //                 selected: false,
    //                 key: "fruit"
    //             },
    //             {
    //                 id: 2,
    //                 title: "Grape",
    //                 selected: false,
    //                 key: "fruit"
    //             },
    //             {
    //                 id: 3,
    //                 title: "Pomegranate",
    //                 selected: false,
    //                 key: "fruit"
    //             },
    //             {
    //                 id: 4,
    //                 title: "Strawberry",
    //                 selected: false,
    //                 key: "fruit"
    //             }
    //         ],
    //         latlong: "",
    //         venues: [],
    //         venueID: undefined,
    //         imgUrl: ""
    //     };
    // }

    componentDidMount() {
        this.fetchPlaceTest();
    }

    fetchPlaceTest = () => {
        var sydney = new window.google.maps.LatLng(-33.867, 151.195);

        var map = new window.google.maps.Map(document.getElementById("map"), {
            center: sydney,
            zoom: 15
        });

        var request = {
            query: "Museum of Contemporary Art Australia",
            fields: ["name", "geometry", "formatted_address", "photo", "rating"]
        };

        var service = new window.google.maps.places.PlacesService(map);

        service.findPlaceFromQuery(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                console.log(results);
                this.setState({ test: results[0] });
                map.setCenter(results[0].geometry.location);
            }
        });
    };

    render() {
        return (
            <div>
                {/* <input
                    onChange={this.handleInputChange}
                    value={this.state.inputValue}
                /> */}
                <div id="map" />
                {!!this.state.test ? (
                    <VenueList test={this.state.test} />
                ) : null}
            </div>
        );
    }
}
export default withPlaces(App);
