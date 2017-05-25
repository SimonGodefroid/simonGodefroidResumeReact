import React from "react";
import { Link } from "react-router";
import { css } from "glamor";

let linkElement = css({
  color: "black",
  padding: "0 40px",
  ":hover": {
    color: "red",
    textDecorationLine: "none"
  },
  textDecorationLine: "none",
  ":visited": {
    textDecorationLine: "none",
    color: "black",
    ":hover": {
      color: "red",
      textDecorationLine: "none"
    }
  },

  ":focus": {
    textDecorationLine: "none",
    color: "green"
  },
  "@media(max-width: 698px)": {
    padding: "10px"
  }
});

let navBar = css({
  backgroundColor: "white",
  textAlign: "center",
  padding: "40px 0",

  "@media(max-width: 698px)": {
    paddingTop: "10px",
    height: "30px",
    //width: "220px",
    //margin: "auto",
    borderRadius: "20px"
  }
});

let liElement = css({
  display: "inline",
  "@media(max-width: 698px)": {
    //display: "block",
    fontSize: "12px"
    //padding: "10px"
  }
});

export default class NavBar extends React.Component {
  render() {
    return (
      <ul {...navBar}>
        <li {...liElement} id={"#top"}>
          <a href={"#whoiam"} {...linkElement}>
            QUI SUIS-JE
          </a>
        </li>
        <li {...liElement}>
          <a href={"#mystack"} {...linkElement}>
            MON STACK
          </a>
        </li>
        <li {...liElement}>
          <a href="#myprojects" {...linkElement}>
            MES PROJETS
          </a>
        </li>
        <li {...liElement}>
          <a href="#resume" {...linkElement}>
            MON CV
          </a>
        </li>
      </ul>
    );
  }
}
