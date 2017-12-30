import React, { Component } from "react";
import { Col, Row } from "reactstrap";

import ReactEcharts from "echarts-for-react";
import { convertToPercentage } from "../utlis/helper";

class ResultsValues extends Component {
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
          { name: this.props.resultData[4]["name"], max: 100 }
        ]
      },
      series: [
        {
          name: "Values",
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
                convertToPercentage(this.props.resultData[4]["percentile"])
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
      <div className="plot-wrapper plot-wrapper-values">
        <Row className="plot-contents">
          <Col lg="12" md="12" sm="12" xs="12">
            <h1 className="text-center">Values</h1>
            <ReactEcharts
              option={this.getOtion()}
              style={{ width: "100%", height: 600 }}
              className="react_for_echarts"
            />
            <div className="plot-description">
              <p className="lead">
                Values describe motivating factors that influence the author's
                decision-making. The following table describes the five values
                that the service infers.
              </p>
              <ul>
                <li>
                  <strong>Self-transcendence</strong> Show concern for the
                  welfare and interests of others.
                </li>
                <li>
                  <strong>Conservation</strong> Emphasize self-restriction,
                  order, and resistance to change.
                </li>
                <li>
                  <strong>Hedonism</strong> Seek pleasure and sensuous
                  gratification for themselves.
                </li>
                <li>
                  <strong>Self-enhancement</strong> Seek personal success for
                  themselves.
                </li>
                <li>
                  <strong>Open to change</strong> Emphasize independent action,
                  thought, and feeling, as well as a readiness for new
                  experiences.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultsValues;
