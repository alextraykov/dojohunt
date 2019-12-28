import React from "react";
import "../styles/GymHeaderDetails.css";
import MapComponent from "../components/MapComponent";

export default function GymItem(props) {
    return (
        <div className="gi-container">
            <div className="gi-map">
                <MapComponent />
            </div>
            <div className="gi-textitems">
                <h2 className="giHeading">Placeholder Heading</h2>
                <div class="ghRatingAddress">
                    <p className="ghRating">
                        <span role="img" alt="star">
                            {" "}
                            ⭐️
                        </span>{" "}
                        4.7
                    </p>
                    <p className="ghAddress">
                        Boulevard "Professor Tsvetan Lazarov" 4
                    </p>
                </div>
                <div>
                    <button className="btn-secondary">Visit page</button>
                    <button className="btn-tertiary">Contact gym</button>
                </div>
            </div>
        </div>
    );
}
