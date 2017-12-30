import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
class Header extends Component {
  render() {
    return (
      <Jumbotron className="app-banner hidden-load animated fadeIn">
        <Container>
          <h1 className="display-3 banner-title">
            &lsquo;I told my ther<span className="ai">A</span>p<span className="ai">
              I
            </span>st about you...
          </h1>
          <p className="lead">
            Gain insight into how and why people think, act, and feel the way
            they do. The underlying AI applies linguistic analytics and
            personality theory to infer attributes from a person's unstructured
            text or Twitter feed.
          </p>
          <p>
            <small>
              Powered by <a href="https://www.ibm.com/watson">IBM Watson</a>
              {""} / Developed by {""}
              <a href="https://github.com/shahabqamar">Shahab Qamar</a>
            </small>
          </p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Header;
