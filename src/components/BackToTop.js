import React from "react";
export default class BackToTop extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "right" }}>
        <a href={"#newTop"}>
          Back to Top
      </a>
      </div>
    );
  }
}
