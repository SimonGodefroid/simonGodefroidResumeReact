import React from "react";
import { css } from "glamor";

let backToTop = css({
  textAlign: "right",
  "@media(max-width: 698px)": {
    padding: "20px",
    textAlign: "center"
  }
});

export default class BackToTop extends React.Component {
  render() {
    return (
      <div {...backToTop}>
        <a href={"#newTop"}>
          Back to Top
        </a>
      </div>
    );
  }
}
