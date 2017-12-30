import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ReactEcharts from "echarts-for-react";
import { convertToPercentage } from "../utlis/helper";
import ResultsBigFiveFacet from "../components/ResultsBigFiveFacet";

class ResultsBigFive extends Component {
  constructor(props) {
    super(props);

    this.getOtion = this.getOtion.bind(this);
  }

  getOtion() {
    const option = {
      tooltip: {},
      scale: true,
      radar: {
        name: {
          textStyle: {
            color: "#fff",
            fontSize: 16
          }
        },
        //shape: "circle",
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
          name: "The Big Five",
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
      <div className="plot-wrapper">
        <Row className="plot-contents">
          <Col lg="12" md="12" sm="12" xs="12">
            <h1 className="text-center">The Big 5</h1>
            <ReactEcharts
              option={this.getOtion()}
              style={{ width: "100%", height: 600 }}
              className="react_for_echarts"
            />
            <div className="plot-description">
              <p className="lead">
                Big Five personality characteristics represent the most widely
                used model for generally describing how a person engages with
                the world. The model includes five primary dimensions:{" "}
              </p>
              <ol>
                <li>
                  <strong>Agreeableness</strong> is a person's tendency to be
                  compassionate and cooperative toward others.
                </li>
                <li>
                  <strong>Conscientiousness</strong> is a person's tendency to
                  act in an organized or thoughtful way.{" "}
                </li>
                <li>
                  <strong>Extraversion</strong> is a person's tendency to seek
                  stimulation in the company of others.{" "}
                </li>
                <li>
                  <strong>Emotional range</strong>, also referred to as
                  Neuroticism or Natural reactions, is the extent to which a
                  person's emotions are sensitive to the person's environment.
                </li>
                <li>
                  <strong>Openness</strong> is the extent to which a person is
                  open to experiencing a variety of activities.{" "}
                </li>
              </ol>
              <p>
                Each of these top-level dimensions has six facets that further
                characterize an individual according to the dimension.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="plot-contents plot-facets">
          <Col lg="6" md="12" sm="12" xs="12" className="plot-facet">
            <h2 className="text-center">Agreeableness</h2>
            <ResultsBigFiveFacet
              chartTitle={this.props.resultData[3]["name"]}
              resultData={this.props.resultData[3]["children"]}
            />
            <div className="plot-description-facet">
              <ul>
                <li>
                  <strong>Altruism</strong> Find that helping others is
                  genuinely rewarding, that doing things for others is a form of
                  self-fulfillment rather than self-sacrifice.
                </li>
                <li>
                  <strong>Cooperation</strong> Dislike confrontation. They are
                  perfectly willing to compromise or to deny their own needs to
                  get along with others.
                </li>
                <li>
                  <strong>Modesty</strong> Are unassuming, rather self-effacing,
                  and humble. However, they do not necessarily lack
                  self-confidence or self-esteem.
                </li>
                <li>
                  <strong>Uncompromising</strong> See no need for pretense or
                  manipulation when dealing with others and are therefore
                  candid, frank, and genuine.
                </li>
                <li>
                  <strong>Sympathy</strong> Are tender-hearted and
                  compassionate.
                </li>
                <li>
                  <strong>Trust</strong> Assume that most people are
                  fundamentally fair, honest, and have good intentions. They
                  take people at face value and are willing to forgive and
                  forget.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" md="12" sm="12" xs="12" className="plot-facet">
            <h2 className="text-center">Conscientiousness</h2>
            <ResultsBigFiveFacet
              chartTitle={this.props.resultData[1]["name"]}
              resultData={this.props.resultData[1]["children"]}
            />
            <div className="plot-description-facet">
              <ul>
                <li>
                  <strong>Achievement striving</strong> Try hard to achieve
                  excellence. Their drive to be recognized as successful keeps
                  them on track as they work hard to accomplish their goals.
                </li>
                <li>
                  <strong>Cautiousness</strong> Are disposed to think through
                  possibilities carefully before acting.
                </li>
                <li>
                  <strong>Dutifulness</strong> Have a strong sense of duty and
                  obligation.
                </li>
                <li>
                  <strong>Orderliness</strong> Are well-organized, tidy, and
                  neat.
                </li>
                <li>
                  <strong>Self-discipline</strong> Have the self-discipline, or
                  "will-power," to persist at difficult or unpleasant tasks
                  until they are completed.
                </li>
                <li>
                  <strong>Self-efficacy</strong> Are confident in their ability
                  to accomplish things.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" md="12" sm="12" xs="12" className="plot-facet">
            <h2 className="text-center">Extraversion</h2>
            <ResultsBigFiveFacet
              chartTitle={this.props.resultData[2]["name"]}
              resultData={this.props.resultData[2]["children"]}
            />
            <div className="plot-description-facet">
              <ul>
                <li>
                  <strong>Activity level</strong> Lead fast-paced and busy
                  lives. They do things and move about quickly, energetically,
                  and vigorously, and they are involved in many activities.
                </li>
                <li>
                  <strong>Assertiveness</strong> Like to take charge and direct
                  the activities of others. They tend to be leaders in groups.
                </li>
                <li>
                  <strong>Cheerfulness</strong> Experience a range of positive
                  feelings, including happiness, enthusiasm, optimism, and joy.
                </li>
                <li>
                  <strong>Excitement-seeking</strong> Are easily bored without
                  high levels of stimulation.
                </li>
                <li>
                  <strong>Outgoing</strong> Genuinely like other people and
                  openly demonstrate positive feelings toward others.
                </li>
                <li>
                  <strong>Gregariousness</strong> Find the company of others
                  pleasantly stimulating and rewarding. They enjoy the
                  excitement of crowds.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" md="12" sm="12" xs="12" className="plot-facet">
            <h2 className="text-center">Emotional range</h2>
            <ResultsBigFiveFacet
              chartTitle={this.props.resultData[4]["name"]}
              resultData={this.props.resultData[4]["children"]}
            />
            <div className="plot-description-facet">
              <ul>
                <li>
                  <strong>Fiery</strong> Have a tendency to feel angry.
                </li>
                <li>
                  <strong>Prone to worry </strong> Often feel like something
                  unpleasant, threatening, or dangerous is about to happen. The
                  "fight-or-flight" system of their brains is too easily and too
                  often engaged.
                </li>
                <li>
                  <strong>Melancholy</strong> Tend to react more readily to
                  life's ups and downs.
                </li>
                <li>
                  <strong>Immoderation</strong> Feel strong cravings and urges
                  that they have difficulty resisting, even though they know
                  that they are likely to regret them later. They tend to be
                  oriented toward short-term pleasures and rewards rather than
                  long-term consequences.
                </li>
                <li>
                  <strong>Self-consciousness</strong> Are sensitive about what
                  others think of them. Their concerns about rejection and
                  ridicule cause them to feel shy and uncomfortable around
                  others; they are easily embarrassed.
                </li>
                <li>
                  <strong>Susceptible to stress</strong> Have difficulty coping
                  with stress. They experience panic, confusion, and
                  helplessness when under pressure or when facing emergency
                  situations.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" md="12" sm="12" xs="12" className="plot-facet">
            <h2 className="text-center">Openness</h2>
            <ResultsBigFiveFacet
              chartTitle={this.props.resultData[0]["name"]}
              resultData={this.props.resultData[0]["children"]}
            />
            <div className="plot-description-facet">
              <ul>
                <li>
                  <strong>Adventurousness</strong> Are eager to try new
                  activities and experience different things. They find
                  familiarity and routine boring.
                </li>
                <li>
                  <strong>Artistic interests </strong> Love beauty, both in art
                  and in nature. They become easily involved and absorbed in
                  artistic and natural events. With intellect, this facet is one
                  of the two most important, central aspects of this
                  characteristic.
                </li>
                <li>
                  <strong>Emotionality</strong> Have good access to and
                  awareness of their own feelings.
                </li>
                <li>
                  <strong>Imagination</strong> View the real world as often too
                  plain and ordinary. They use fantasy not as an escape but as a
                  way of creating for themselves a richer and more interesting
                  inner-world.
                </li>
                <li>
                  <strong>Intellect</strong> Are intellectually curious and tend
                  to think in symbols and abstractions. With artistic interests,
                  this facet is one of the two most important, central aspects
                  of this characteristic.
                </li>
                <li>
                  <strong>Authority challenging</strong> Have a readiness to
                  challenge authority, convention, and traditional values.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultsBigFive;
