import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import Header from "../components/Header";
import Icon from "react-fontawesome";

class SourceSelect extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" xs="12">
              <Card className="hidden-load animated fadeIn card-raw-text">
                <CardBody>
                  <NavLink to="/raw">
                    <CardTitle>
                      Raw Text <Icon className="float-right" name="font" />
                    </CardTitle>
                    <CardText>
                      You need text written by the person whose personality
                      you're interested in. It should contain words about every
                      day experiences, thoughts, and responses.
                    </CardText>
                    <Button outline>Select</Button>
                  </NavLink>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="6" sm="12" xs="12">
              <Card className="hidden-load animated fadeIn card-twitter">
                <CardBody>
                  <NavLink to="/twitter">
                    <CardTitle>
                      Twitter <Icon className="float-right" name="twitter" />
                    </CardTitle>
                    <CardText>
                      Scan anyone's Twitter feed. You will need to provide a
                      Twitter handle only. The app will curate the most recent
                      tweets &amp; replies for creating a personality profile.
                    </CardText>
                    <Button outline>Select</Button>
                  </NavLink>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SourceSelect;
