import React, { Component } from "react";
import Main from "../containers/Main";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;
