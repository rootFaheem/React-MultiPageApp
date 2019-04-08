import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import axios from "axios";
import Blog from "./containers/Blog/Blog";

class App extends Component {
  fetchData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=time&apiKey=7c6655aba0184b9b91d65f48fa8a9b52"
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      // <BrowserRouter basename="/my-app">
      <BrowserRouter>
        <div className="App">
          <Blog />
          <div>
            <button className="danger" onClick={this.fetchData}>
              Click me{" "}
            </button>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
