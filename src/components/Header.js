import React from "react";
import NavBar from "../components/NavBar.js";

export default class Header extends React.Component {
  render() {
    console.log("header this.props.", this.props.style);
    return (
      <div
        style={{
          ...this.props.style,
          zIndex: 1000
        }}
      >
        <NavBar />

      </div>
    );
  }
}
