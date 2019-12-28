import React from "react";
import "../styles/PhotoGrid.css";

export default function PhotoGrid(props) {
    return (
        <div className="container">
            <div className="item">
                <img
                    className="item-img"
                    src="https://via.placeholder.com/150"
                />
            </div>
            <div className="item">
                <img
                    className="item-img"
                    src="https://via.placeholder.com/150"
                />
            </div>
            <div className="item">
                <img
                    className="item-img"
                    src="https://via.placeholder.com/150"
                />
            </div>
            <div className="item">
                <img
                    className="item-img"
                    src="https://via.placeholder.com/150"
                />
            </div>
        </div>
    );
}
