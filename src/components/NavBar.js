import React from "react";
import "../styles/NavBar.css";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            inputValue: ""
        };
    }

    toggleSelected = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]));
        temp[id].selected = !temp[id].selected;
        this.setState({
            [key]: temp
        });
    };

    resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]));
        temp.forEach(item => (item.selected = false));
        temp[id].selected = true;
        this.setState({
            [key]: temp
        });
    };

    render() {
        return (
            <div className="nav-container">
                <img
                    className="dojohunt-logo"
                    src={require("../images/dojohunt-logo.svg")}
                />
                <div className="input-dropdown-container">
                    <input
                        type="text"
                        value={this.state.inputValue}
                        placeholder="Search"
                        id="nav-input"
                        onChange={e =>
                            this.state.handleInputChange(e.target.value)
                        }
                    />
                </div>
            </div>
        );
    }
}
