import React from "react";
import { Link } from "react-router";
import { css } from "glamor";
export default class BackToTop extends React.Component {
  render() {
    return (
      <a href={`${this.props.path}`}>
        Back to Top
      </a>
    );
  }
}
