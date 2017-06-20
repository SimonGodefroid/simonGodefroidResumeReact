import React from "react";
//import { css } from "glamor";
export default class Tools extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.link} target="blank">
          {this.props.name}
        </a>
        {" "}
        - {this.props.usage}
      </li>
    );
  }
}
