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
    color: "black"
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
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }

  render() {
    return (
      <div
      // onMouseEnter={() => {
      //   this.setState({ color: "red" }), console.log(this.state.color);
      // }}
      // onMouseLeave={() => {
      //   this.setState({ color: "pink" }), console.log(this.state.color);
      // }}
      >
        <p>
          <a href={"https://github.com/SimonGodefroid/"}>
            {" "}
            <GitHub
              size={50}
              {...icons}
              {...zoom}
              style={{ color: this.state.color }}
            />
          </a>
          <a href={"mailto:simon.godefroid@gmail.com"}>
            <Mail size={50} {...icons} {...zoom} />
          </a>
          <a href={"tel:+33650635085"}>
            <Phone size={50} {...icons} {...zoom} />
          </a>
          <a href={"skype:simon.godefroid?chat"}>
            <Skype size={50} {...icons} {...zoom} />
          </a>
          <a href={"#map"}>
            <MapMarker size={50} {...icons} {...zoom} />
          </a>
        </p>
      </div>
    );
  }
}
