import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import Icon from "react-fontawesome";
import MainMenu from "../components/MainMenu";
import Loading from "../components/Loading";
import Results from "../components/Results";

class RawText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawTextContent: "",
      wordCount: "0",
      submitColor: "secondary",
      submitDisallow: true,
      fetchingData: false,
      loadingmsg: "",
      responseDataRecieved: false,
      responseData: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.tryAgain = this.tryAgain.bind(this);
  }

  focusInput(component) {
    if (component) {
      ReactDOM.findDOMNode(component).focus();
    }
  }

  handleChange(event) {
    this.setState({
      rawTextContent: event.target.value
    });

    let wordCount = event.target.value;
    wordCount = wordCount.replace(/^\s+|\s+$/g, "");

    if (wordCount === "") {
      wordCount = 0;
    } else {
      wordCount = wordCount.split(/\s+/).length;
    }

    if (wordCount === 0) {
      this.setState({
        submitDisallow: true,
        submitColor: "secondary"
      });
    } else if (wordCount > 0) {
      this.setState({
        submitDisallow: false,
        submitColor: "success"
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      fetchingData: true,
      loadingmsg: "Fetching Personality Insights"
    });

    const formData = new FormData(event.target);

    fetch(process.env.REACT_APP_WATSON_API_ENDPOINT, {
      method: "POST",
      body: formData
    })
      .then(function(response) {
        return response.json();
      })
      .then(
        function(data) {
          if (data.error) {
            this.setState(
              {
                fetchingData: false,
                responseDataRecieved: false
              },
              function() {
                alert(data.error + ". Please try again.");
              }
            );
          } else {
            this.setState({
              fetchingData: false,
              responseData: data,
              responseDataRecieved: true
            });
          }
        }.bind(this)
      );
  }

  tryAgain() {
    this.setState({
      rawTextContent: "",
      wordCount: "0",
      submitColor: "secondary",
      submitDisallow: true,
      fetchingData: false,
      loadingmsg: "",
      responseDataRecieved: false,
      responseData: {}
    });
  }

  render() {
    return (
      <div>
        <MainMenu />

        {this.state.fetchingData && (
          <Loading loadingmsg={this.state.loadingmsg} />
        )}

        <div className="container__raw-text hidden-load animated fadeIn">
          {!this.state.responseDataRecieved && (
            <Container className="raw-text-data-entry">
              <h1 className="page-heading text-center">
                <Icon name="font" />
              </h1>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup role="form">
                  <Input
                    type="textarea"
                    placeholder="You can enter as little as 100 words, but for a more accurate analysis, you need more words. Watson requires a minimum of 600, preferably 1,200 or more, to compute statistically significant estimates."
                    name="raw-text-content"
                    id="raw-text-content"
                    onChange={this.handleChange}
                    ref={this.focusInput}
                  />
                </FormGroup>

                <Button
                  type="submit"
                  disabled={this.state.submitDisallow}
                  size="lg"
                  color={this.state.submitColor}
                >
                  Analyse
                </Button>
              </Form>
            </Container>
          )}

          {this.state.responseDataRecieved && (
            <Results
              resultData={this.state.responseData}
              rawText={this.state.rawTextContent}
              tryAgain={this.tryAgain}
            />
          )}
        </div>
      </div>
    );
  }
}

export default RawText;
