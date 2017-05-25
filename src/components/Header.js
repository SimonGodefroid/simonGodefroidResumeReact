import React from "react";
import NavBar from "../components/NavBar.js";
let i = 0;
export default class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          ...this.props.style
          //height: 80
          //overflow: "auto",
          //background: "#aaa"
        }}
      >
        <NavBar />

      </div>
    );
  }
}
