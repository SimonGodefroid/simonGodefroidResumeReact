import React from "react";
import { Link } from "react-router";
import { css } from "glamor";

let linkElement = css({
  color: "white",
  fontWeight: 700,
  padding: "0 40px",
  ":hover": {
    //color: "rgba(105,105,105,0.9)",
    color: "rgb(123,104,238)",
    textDecorationLine: "none"
  },
  textDecorationLine: "none",
  ":visited": {
    textDecorationLine: "none",
    color: "white",
    ":hover": {
      //color: "rgba(105,105,105,0.9)",
      color: "rgb(123,104,238)",
      textDecorationLine: "none"
    }
  },

  ":focus": {
    textDecorationLine: "none",
    color: "green"
  },
  "@media(max-width: 698px)": {
    padding: "10px 20px",
    display: "inline-block"
  }
});

let navBar = css({
  //backgroundColor: "rgba(107,232,144,1)",
  backgroundColor: "rgba(0,0,0,1)",
  zIndex: 100,
  textAlign: "center",
  padding: "20px 0",
  "@media(max-width: 698px)": {
    paddingTop: "10px",
    height: "80px",
    //width: "220px",
    //margin: "auto",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px"
  }
});

let liElement = css({
  display: "inline",
  "@media(max-width: 698px)": {
    //display: "block",
    fontSize: "12px"
  }
});

export default class NavBar extends React.Component {
  render() {
    return (
      <ul {...navBar}>
        <li {...liElement}>
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
        <li {...liElement}>
          <a href="#about" {...linkElement}>
            A PROPOS DU SITE
          </a>
        </li>
      </ul>
    );
  }
}
