import React, { Component } from "react";

export default class Search extends Component {
  changeHandler = event => {};

  render() {
    return (
      <div>
        <input
          onChange={this.changeHandler}
          type="text"
          name="searchInput"
          placeholder="search dojo"
          id="searchInput"
        >
          <button>Search</button>
        </input>
      </div>
    );
  }
}
