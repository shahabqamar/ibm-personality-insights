import React, { Component } from "react";
import { Col, Container } from "reactstrap";
import PersonalityTextSummaries from "personality-text-summary";

class ResultsSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: ""
    };
  }

  componentWillMount() {
    let v3EnglishTextSummaries = new PersonalityTextSummaries({
      version: "v3"
    });
    let textSummary = v3EnglishTextSummaries.getSummary(this.props.resultData);
    this.setState({
      summary: textSummary
    });
  }

  render() {
    return (
      <Container className="results-container">
        <Col lg="12">
          <h1 className="text-center">Result Summary</h1>
          <p className="lead summary-text">{this.state.summary}</p>
        </Col>
      </Container>
    );
  }
}

export default ResultsSummary;
