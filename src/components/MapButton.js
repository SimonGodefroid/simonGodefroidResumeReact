import React, { Component } from "react";
import { css } from "glamor";

let button = css({
  backgroundColor: "black",
  color: "white",
  border: "none",
  padding: 10,
  outline: "none",
  width: "140px"
});

class MapButton extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button {...button} onClick={() => this.props.onClickFn()}>
          {this.props.mapControlActive === false
            ? "Activer la Map"
            : "Désactiver la Map"}
        </button>
      </div>
    );
  }
}

export default MapButton;
