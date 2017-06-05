import React from "react";
import { css } from "glamor";

let footer = css({
  position: "fixed",
  display: "block",
  color: "white",
  width: "100vw",
  height: "30px",
  bottom: 0,
  padding: 10,
  fontSize: 12,
  backgroundColor: "black",
  textAlign: "center"
})

export default class Footer extends React.Component {
  render() {
    return (
      <div {...footer}>
        © Simon GODEFROID 2017
      </div>
    );
  }
}
