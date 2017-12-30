import React, { Component } from "react";
import { Col, Row } from "reactstrap";

import ReactEcharts from "echarts-for-react";
import { convertToPercentage } from "../utlis/helper";

class ResultsNeeds extends Component {
  constructor(props) {
    super(props);

    this.getOtion = this.getOtion.bind(this);
  }

  getOtion() {
    const option = {
      tooltip: {},
      scale: false,
      radar: {
        name: {
          textStyle: {
            color: "#fff",
            fontSize: 16
          }
        },
        shape: "circle",
        indicator: [
          {
            name: this.props.resultData[0]["name"],
            max: 100
          },
          { name: this.props.resultData[1]["name"], max: 100 },
          { name: this.props.resultData[2]["name"], max: 100 },
          { name: this.props.resultData[3]["name"], max: 100 },
          { name: this.props.resultData[4]["name"], max: 100 },
          { name: this.props.resultData[5]["name"], max: 100 },
          { name: this.props.resultData[6]["name"], max: 100 },
          { name: this.props.resultData[7]["name"], max: 100 },
          { name: this.props.resultData[8]["name"], max: 100 },
          { name: this.props.resultData[9]["name"], max: 100 },
          { name: this.props.resultData[10]["name"], max: 100 },
          { name: this.props.resultData[11]["name"], max: 100 }
        ]
      },
      series: [
        {
          name: "Needs",
          type: "radar",
          symbolSize: "10",
          areaStyle: {
            normal: {
              opacity: 0.3
            }
          },
          data: [
            {
              value: [
                convertToPercentage(this.props.resultData[0]["percentile"]),
                convertToPercentage(this.props.resultData[1]["percentile"]),
                convertToPercentage(this.props.resultData[2]["percentile"]),
                convertToPercentage(this.props.resultData[3]["percentile"]),
                convertToPercentage(this.props.resultData[4]["percentile"]),
                convertToPercentage(this.props.resultData[5]["percentile"]),
                convertToPercentage(this.props.resultData[6]["percentile"]),
                convertToPercentage(this.props.resultData[7]["percentile"]),
                convertToPercentage(this.props.resultData[8]["percentile"]),
                convertToPercentage(this.props.resultData[9]["percentile"]),
                convertToPercentage(this.props.resultData[10]["percentile"]),
                convertToPercentage(this.props.resultData[11]["percentile"])
              ]
            }
          ]
        }
      ]
    };

    return option;
  }
  render() {
    return (
      <div className="plot-wrapper plot-wrapper-needs">
        <Row className="plot-contents">
          <Col lg="12" md="12" sm="12" xs="12">
            <h1 className="text-center">Needs</h1>
            <ReactEcharts
              option={this.getOtion()}
              style={{ width: "100%", height: 600 }}
              className="react_for_echarts"
            />
            <div className="plot-description">
              <p className="lead">
                Needs describe at a high level those aspects of a product that
                are likely to resonate with the author of the input text. The
                following table describes the twelve needs that the service
                evaluates.{" "}
              </p>
              <ul>
                <li>
                  <strong>Excitement</strong> Want to get out there and live
                  life, have upbeat emotions, and want to have fun.
                </li>
                <li>
                  <strong>Harmony</strong> Appreciate other people, their
                  viewpoints, and their feelings.{" "}
                </li>
                <li>
                  <strong>Curiosity</strong> Have a desire to discover, find
                  out, and grow.
                </li>
                <li>
                  <strong>Ideal</strong> Desire perfection and a sense of
                  community.
                </li>
                <li>
                  <strong>Closeness</strong> Relish being connected to family
                  and setting up a home.
                </li>
                <li>
                  <strong>Self-expression</strong> Enjoy discovering and
                  asserting their own identities.
                </li>
                <li>
                  <strong>Liberty</strong> Have a desire for fashion and new
                  things, as well as the need for escape.
                </li>
                <li>
                  <strong>Love</strong> Enjoy social contact, whether one-to-one
                  or one-to-many. Any brand that is involved in bringing people
                  together taps this need.
                </li>
                <li>
                  <strong>Practicality</strong> Have a desire to get the job
                  done, a desire for skill and efficiency, which can include
                  physical expression and experience.
                </li>
                <li>
                  <strong>Stability</strong> Seek equivalence in the physical
                  world. They favor the sensible, the tried and tested.
                </li>
                <li>
                  <strong>Challenge</strong> Have an urge to achieve, to
                  succeed, and to take on challenges.
                </li>
                <li>
                  <strong>Structure</strong> Exhibit groundedness and a desire
                  to hold things together. They need things to be well organized
                  and under control.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultsNeeds;
