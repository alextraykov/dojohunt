import React, { Component } from "react";
import "../App.css";
class Sidebar extends Component {
    render() {
        const {
            filterVenues,
            listItemClick,
            filteredVenues,
            query
        } = this.props;
        return (
            <div id="sidebar">
                <input
                    className="inputField"
                    placeholder="filter content"
                    value={query}
                    onChange={e => {
                        filterVenues(e.target.value);
                    }}
                />
                <br />
                <br />
                {filteredVenues &&
                    filteredVenues.length > 0 &&
                    filteredVenues.map((venue, index) => (
                        <div
                            key={index}
                            className="venue-item"
                            onClick={() => {
                                listItemClick(venue);
                            }}
                        >
                            {venue.name}
                        </div>
                    ))}
            </div>
        );
    }
}

export default Sidebar;
