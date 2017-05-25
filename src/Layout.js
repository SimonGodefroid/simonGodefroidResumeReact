import React from "react";
//import Global from "./Global";
import SocialMedia from "./components/SocialMedia";

import { css } from "glamor";

let backgroundHero = css({
  backgroundImage: "url('./assets/img/pexels-photo.jpg')",
  backgroundRepeat: "cover",
  height: 300,
  backgroundSize: "100vw",
  "@media(max-width: 698px)": {
    height: 250

    //width: "100vw"
  }
});
let overlayHero = css({
  height: 300,
  backgroundColor: "rgba(107,232,144,0.5)",
  position: "absolute",
  top: 0,
  width: "100%",
  "@media(max-width: 698px)": {
    height: 250
    //width: "100vw"
  }
});

let socialMediaBar = css({
  margin: "30px 0 0 30px",
  "@media(max-width: 698px)": {
    textAlign: "center"
  }
});

let imageLanding = css({
  borderRadius: 75,
  border: "4px solid white",
  height: 150,
  marginTop: 10,
  "@media(max-width: 698px)": {
    height: "100px"
  }
});

let heroText = css({
  fontSize: 40,
  "@media(max-width: 698px)": {
    fontSize: 20,
    marginTop: 60
  }
});

let descText = css({
  fontSize: 20,
  "@media(max-width: 698px)": {
    fontSize: 15
  }
});

let headerText = css({
  textAlign: "center",
  marginTop: -50,
  color: "white",
  lineHeight: 2
});

let imageHolder = css({
  textAlign: "center"
});

export default class Layout extends React.Component {
  render() {
    return (
      <div style={{ fontFamily: "Circular" }}>
        <div {...backgroundHero} />
        <div {...overlayHero}>
          <div {...socialMediaBar}>
            <SocialMedia />
          </div>
          <div {...headerText}>

            <h1 {...heroText}>
              SIMON GODEFROID
            </h1>
            <p {...descText}>
              Web and Mobile Full-Stack JavaScript Developper

              <br />

              Movie Maniac
            </p>
          </div>
          <div {...imageHolder}>
            <img src="./assets/img/simongodefroid.png" {...imageLanding} alt="Simon GODEFROID"/>
          </div>

        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
