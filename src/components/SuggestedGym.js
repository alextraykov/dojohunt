import React from "react";
import "../styles/SuggestedGym.css";

export default function SuggestedGym(props) {
    return (
        <div className="sg-container">
            <img
                className="sg-image"
                alt="gym"
                src="https://via.placeholder.com/150/"
            />
            <div className="sg-textitems">
                <h2 className="sgHeading">Placeholder Heading</h2>
                <div class="sgRatingAddress">
                    <p className="sgRating">
                        <span role="img" alt="star">
                            {" "}
                            ⭐️
                        </span>{" "}
                        4.7
                    </p>
                    <p className="sgAddress">
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
