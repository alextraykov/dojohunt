import React from "react";
import "../styles/Footer.css";

export default function Footer(props) {
    return (
        <div className="footercont">
            <div className="cont">
                <img src="dojohunt-logo.svg"/>
                <nav className="footer-nav">
                    <a href="">About</a>
                    <a href="">Your feedback</a>
                    <a href="">Terms</a>
                </nav>
                    <div className="footer-paragraph">
                    <p>
                        Dojohunt is the joint effort of <a>@alextraykov</a> and <a>@petardyakov</a>. 
                    </p>
                    <p class="footer-microcopy">
                    Use with care, motivation and always remember to warm up properly. Oss. <span>🤼‍♂️</span>
                    </p>
                    </div>
            </div>
        </div>
    );
}
