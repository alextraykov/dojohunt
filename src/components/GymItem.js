import React from "react";
import "../styles/GymItem.css";

export default function GymItem(props) {
    console.log(props);
    return (
        <div className="gi-container">
            <img
                className="gi-image"
                alt="gym"
                src={props.test.photos[0].getUrl()}
            />
            <div className="gi-textitems">
                <h2 className="giHeading">{props.test.name}</h2>
                <div className="giRatingAddress">
                    <p className="giRating">
                        <span role="img" alt="star">
                            {" "}
                            ⭐️
                        </span>{" "}
                        {props.test.rating}
                    </p>
                    <p className="giAddress">{props.test.formatted_address}</p>
                </div>
                <div>
                    <button className="btn-secondary">Visit page</button>
                    <a className="btn-tertiary" href={`tel:`}>
                        Contact gym
                    </a>
                </div>
            </div>
        </div>
    );
}
