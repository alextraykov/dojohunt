import React, { Component } from "react";
import loadPlacesAPI from "../loadPlacesAPI";

export default function withPlaces(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                loaded: false
            };
        }

        componentDidMount() {
            loadPlacesAPI(() => {
                this.setState({ loaded: true });
            });
        }

        render() {
            return !this.state.loaded ? (
                <div>Loading...</div>
            ) : (
                <WrappedComponent {...this.props} />
            );
        }
    };
}
