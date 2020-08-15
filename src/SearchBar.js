import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchBar(props) {
  return (
    <div className="SearchBar">
      <div className="title">
        <h1>Movie Search</h1>
      </div>
      <div className="searchBottom">
        <input
          className="inputBox"
          placeholder=" put movie name here"
          onChange={props.onChange}
        ></input>
        <Button
          type="button"
          className=" shadow btn btn-secondary btn-sm ml-3"
          onClick={props.onClick}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
