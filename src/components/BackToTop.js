import React from "react";
export default class BackToTop extends React.Component {
  render() {
    return (
      <a href={`${this.props.path}`}>
        Back to Top
      </a>
    );
  }
}
