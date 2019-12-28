import React, { Component } from "react";
import "../styles/Search.css";

export default class Search extends Component {
  changeHandler = event => {};

  render() {
    return (
      <div className="searchContainer">
        <input
          onChange={this.changeHandler}
          type="text"
          name="searchInput"
          placeholder="Discover gyms"
          id="searchInput"
        />
          <button>Search</button>
      </div>
    );
  }
}
