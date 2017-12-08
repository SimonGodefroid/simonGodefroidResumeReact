import React from "react";
import NavBar from "../components/NavBar.js";

export default class Header extends React.Component {
  render() {
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
