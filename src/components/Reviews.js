import React from "react";
import "../styles/Reviews.css";

export default function Reviews(props) {
    return (
        <div className="review-container">
            <div className="giRatingAddress">
                <p className="giRating">
                    <span role="img" alt="star">
                        {" "}
                        ⭐️
                    </span>{" "}
                    4.7
                </p>
                <p className="giAddress">
                    One of the best boxing clubs in sofia. 4 boxing rings 1 mma
                    cage, fitness and cardio equipment. Very capable and
                    qualified coaches. Free parking.
                </p>
            </div>
            <div class="giRatingAddress">
                <p className="giRating">
                    <span role="img" alt="star">
                        {" "}
                        ⭐️
                    </span>{" "}
                    4.7
                </p>
                <p className="giAddress">
                    One of the best boxing clubs in sofia. 4 boxing rings 1 mma
                    cage, fitness and cardio equipment. Very capable and
                    qualified coaches. Free parking.
                </p>
            </div>
            <div class="giRatingAddress">
                <p className="giRating">
                    <span role="img" alt="star">
                        {" "}
                        ⭐️
                    </span>{" "}
                    4.7
                </p>
                <p className="giAddress">
                    One of the best boxing clubs in sofia. 4 boxing rings 1 mma
                    cage, fitness and cardio equipment. Very capable and
                    qualified coaches. Free parking.
                </p>
            </div>
        </div>
    );
}
