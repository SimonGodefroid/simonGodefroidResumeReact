import React from "react";
//import Dimensions from "react";
import { css } from "glamor";

let imageStyle = css({
  "@media(max-width: 698px)": {
    height: "50px",
    maxWidth: "100vw"
  }
});

export default class Image extends React.Component {
  render() {
    return (
      <img
        src={this.props.source}
        style={{
          height: window.innerWidth <= 698
            ? this.props.maxHeight
            : this.props.height,
          width: this.props.width,
          padding: this.props.padding
        }}
        alt={this.props.alt}
        {...imageStyle}
      />
    );
  }
}
