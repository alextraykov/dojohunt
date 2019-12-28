import React from "react";
import "../styles/GymItem.css";

export default function GymItem(props) {
    return (
        <div className="gi-container">
            <img
                className="gi-image"
                alt="gym"
                src="https://via.placeholder.com/150/"
            />
            <div className="gi-textitems">
                <h2 className="giHeading">Placeholder Heading</h2>
                <div className="giRatingAddress">
                    <p className="giRating">
                        <span role="img" alt="star">
                            {" "}
                            ⭐️
                        </span>{" "}
                        4.7
                    </p>
                    <p className="giAddress">
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
