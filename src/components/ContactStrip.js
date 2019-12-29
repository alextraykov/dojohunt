import React, { Component } from "react";
import "../styles/ContactStrip.css";

class ContactStrip extends Component {
    render() {
        return (
            <div className="fw-strip">
                <div>
                    <div>
                        <h3>Do you think this gym is a fit?</h3>
                        <p className="paragraph">
                            If that's the case, you can reach out to them and
                            schedule your first class
                        </p>
                        <button className="btn-secondary">Contact gym</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactStrip;
