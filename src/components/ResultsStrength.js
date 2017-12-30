import React, { Component } from "react";
import { Container, Tooltip, Badge, Alert } from "reactstrap";
import IconBrain from "../images/icon-brain.svg";

class ResultStrength extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen: false,
      strengthClass: "",
      strengthLabel: ""
    };
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }
  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  componentWillMount() {
    if (this.props.wordCount < 600) {
      this.setState({
        strengthClass: "analysis-weak",
        strengthLabel: "Weak Analysis"
      });
    } else if (this.props.wordCount >= 600 && this.props.wordCount < 1200) {
      this.setState({
        strengthClass: "analysis-moderate",
        strengthLabel: "Moderate Analysis"
      });
    } else if (this.props.wordCount >= 1200 && this.props.wordCount < 6000) {
      this.setState({
        strengthClass: "analysis-strong",
        strengthLabel: "Strong Analysis"
      });
    } else if (this.props.wordCount >= 6000) {
      this.setState({
        strengthClass: "analysis-very-strong",
        strengthLabel: "Very Strong Analysis"
      });
    }
  }

  render() {
    return (
      <Container className="result-strength-container">
        <div className="icon-brain">
          <div className="icon-brain-container">
            <img src={IconBrain} alt="The Human Brain" />
          </div>
          <div className="analysis-strength">
            <a href="#tooltip" id="analysisStrengthTooltip">
              <Badge className={this.state.strengthClass} color="danger">
                {this.state.strengthLabel}
              </Badge>
            </a>
            <Tooltip
              className="analysis-strength-toolip"
              placement="top"
              isOpen={this.state.tooltipOpen}
              target="analysisStrengthTooltip"
              toggle={this.toggleTooltip}
            >
              Analysis strength is determined by word count of unstructured text
              provided. <br />Weak &lt; 600 words. <br />Moderate &lt; 1,200
              words. <br />Strong &gt; 1,200 words.<br />Very Strong &gt; 6,000
              words.
            </Tooltip>
          </div>
        </div>
        {this.props.warnings.map(function(warning) {
          return (
            <Alert className="result-msg" color="warning">
              {warning.message}
            </Alert>
          );
        })}
      </Container>
    );
  }
}

export default ResultStrength;
