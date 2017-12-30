import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SourceSelect from "../components/SourceSelect";
import RawText from "../containers/RawText";
import Twitter from "../containers/Twitter";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SourceSelect} />
        <Route path="/raw" component={RawText} />
        <Route path="/twitter" component={Twitter} />
      </Switch>
    );
  }
}

export default Main;
