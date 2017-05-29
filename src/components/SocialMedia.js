import React from "react";
import GitHub from "react-icons/lib/fa/github-alt";
import Phone from "react-icons/lib/fa/phone";
import Skype from "react-icons/lib/fa/skype";
import Mail from "react-icons/lib/md/mail-outline";
import MapMarker from "react-icons/lib/fa/map-marker";
import { css } from "glamor";

let icons = css({
  padding: 10,
  border: "2px white solid",
  borderRadius: 25,
  color: "white",
  ":hover": {
    color: "rgb(123,104,238)"
  },
  "@media(max-width: 698px)": {
    margin: "0 5px"
  }
});

let zoom = css({
  transition: "all .2s ease-in-out",
  ":hover": { transform: "scale(1.1) " }
});

export default class SocialMedia extends React.Component {
  render() {
    return (
      <div>
        <p>
          <a href={"https://github.com/SimonGodefroid/"}>
            {" "}
            <GitHub size={this.props.size} {...icons} {...zoom} />
          </a>
          <a href={"mailto:simon.godefroid@gmail.com"}>
            <Mail size={this.props.size} {...icons} {...zoom} />
          </a>
          <a href={"tel:+33650635085"}>
            <Phone size={this.props.size} {...icons} {...zoom} />
          </a>
          <a href={"skype:simon.godefroid?chat"}>
            <Skype size={this.props.size} {...icons} {...zoom} />
          </a>
          <a href={"#map"}>
            <MapMarker size={this.props.size} {...icons} {...zoom} />
          </a>
        </p>
      </div>
    );
  }
}
