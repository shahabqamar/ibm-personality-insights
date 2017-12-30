import React, { Component } from "react";
import Icon from "react-fontawesome";
import { Container, Table } from "reactstrap";

class ResultsConsumerPref extends Component {
  constructor(props) {
    super(props);
    this.getRowClass = this.getRowClass.bind(this);
    this.getScoreIconClass = this.getScoreIconClass.bind(this);
  }

  getRowClass(score) {
    if (score === 1) return "table-success";
    else if (score === 0) return "table-danger";
    else if (score === 0.5) return "table-warning";
  }

  getScoreIconClass(score) {
    if (score === 1) return "smile-o";
    else if (score === 0) return "frown-o";
    else if (score === 0.5) return "meh-o";
  }

  render() {
    return (
      <Container className="wrapper-consumer-pref">
        {this.props.resultData.map(category => (
          <div
            key={"wrapper-table-" + category.consumption_preference_category_id}
          >
            <h4 className="text-center">{category.name}</h4>
            <Table
              hover
              key={"table-" + category.consumption_preference_category_id}
            >
              <tbody
                key={"tbody-" + category.consumption_preference_category_id}
              >
                {category.consumption_preferences.map(item => (
                  <tr
                    key={
                      "table-" +
                      category.consumption_preference_category_id +
                      "-row-" +
                      item.consumption_preference_id
                    }
                    className={this.getRowClass(item.score)}
                  >
                    <td key={"name-" + item.consumption_preference_id}>
                      {item.name}
                    </td>
                    <td
                      key={"score-" + item.consumption_preference_id}
                      className="score"
                    >
                      <Icon name={this.getScoreIconClass(item.score)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ))}
      </Container>
    );
  }
}

export default ResultsConsumerPref;
