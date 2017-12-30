import React, { Component } from "react";
import LoadingIcon from "../images/loading.gif";

class Loading extends Component {
  render() {
    return (
      <div className="icon-loading-wrapper">
        <div className="icon-loading-status" alt="Loading..." src={LoadingIcon}>
          <img alt="Loading..." src={LoadingIcon} />
          <div className="icon-loading-msg">{this.props.loadingmsg}</div>
        </div>
      </div>
    );
  }
}

export default Loading;
