import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { css } from "glamor";
import { configureAnchors } from "react-scrollable-anchor";

let titles = css({
  paddingTop: "0px",
  fontFamily: "Open Sans Condensed",
  fontWeight: 700,
  marginTop: "10px",
  marginBottom: "10px",
  "@media(max-width: 698px)": {
    textAlign: "center",
    padding: "20px 0",
    marginBottom: "0px"
  }
});

configureAnchors({ offset: -76, scrollDuration: 300 });

export default class Anchor extends React.Component {
  render() {
    return (
      <ScrollableAnchor id={this.props.path}>
        <h2 {...titles}>{this.props.title}</h2>
      </ScrollableAnchor>
    );
  }
}
