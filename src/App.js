import React, { Component } from "react";
import SearchBar from "./SearchBar";
import InputBar from "./InputBar";
import Footer from "./Footer";
import Swal from "sweetalert2";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: "",
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      names: "",
    });
  }

  ///used in handleClick()
  alert1() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "you can't leave it blank!",
    });
  }

  handleChange = (event) => {
    this.setState({
      names: event.target.value,
    });
  };

  isEmpty(str) {
    return str.replace(/^\s+|\s+$/gm, "").length === 0;
  }

  handleClick = () => {
    let api =
      "https://api.themoviedb.org/3/search/movie?api_key=b9a5b472a721ee491a871b1d1a94acf7&language=en-US&include_adult=true&query=";
    this.isEmpty(this.state.names)
      ? this.alert1()
      : this.handleFetch(api + this.state.names);
  };

  //used in handleFetch()
  alert2() {
    Swal.fire({
      icon: "error",
      title: "Oops... try again",
      text: "mayber you forget to put space between movie names ?",
    });
  }

  handleFetch = (e) => {
    let datas = [];
    fetch(e)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        if (myJson.results === undefined || myJson.results.length == 0) {
          this.alert2();
        } else {
          let newDate = datas.concat(...myJson.results);
          this.setState({
            data: newDate,
          });
        }
      });
  };

  handleKeyDown = (event) => {
    if (event.key == "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div onKeyPress={this.handleKeyDown}>
        <SearchBar
          onChange={(i) => this.handleChange(i)}
          onClick={(i) => this.handleClick(i)}
        />
        <InputBar datas={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
