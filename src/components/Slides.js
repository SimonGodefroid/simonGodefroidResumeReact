import React from "react";
export default class Slides extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.url} alt={this.props.alt} />
        <p
          className="legend"
          style={{
            color: this.props.fontColor,
            fontSize: this.props.fontSize
          }}
        >
          {this.props.legend}
        </p>
      </div>
    );
  }
}
