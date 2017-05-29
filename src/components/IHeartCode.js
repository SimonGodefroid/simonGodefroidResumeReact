import React from "react";
import Child from "react-icons/lib/fa/child";
import Heart from "react-icons/lib/fa/heart";
import Code from "react-icons/lib/fa/code";

import { css } from "glamor";

let icons = css({
  padding: 10,
  margin: "40px auto",

  ":hover": {
    color: "rgb(123,104,238)"
  },
  "@media(max-width: 698px)": {
    marginTop: "-40px",
    marginBottom: "60px"
  }
});

export default class IHeartCode extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <p style={{ verticalAlign: "top" }}>
          <span
            style={{
              fontFamily: "serif",
              fontSize: "100px",
              paddingTop: "-10px",
              margin: "0 10px"
            }}
          >
            I
          </span>
          <Heart
            size={100}
            {...icons}
            style={{ color: "red", marginTop: "-20px" }}
          />
          <Code
            size={120}
            {...icons}
            style={{ color: "rgba(107,232,144,1)", marginTop: "-20px" }}
          />
        </p>
      </div>
    );
  }
}
