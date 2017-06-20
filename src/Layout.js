import React from "react";
//import Global from "./Global";
import SocialMedia from "./components/SocialMedia";
import DownloadResume from "./components/DownloadResume";
import ScrollableAnchor from "react-scrollable-anchor";
import { css } from "glamor";

let backgroundHero = css({
  backgroundImage: "url('./assets/img/pexels-photo_lowq.jpg')",
  //backgroundRepeat: "no-repeat",
  //backgroundRepeat: "cover",
  height: 300,
  zIndex: 1,
  backgroundSize: "100vw",
  "@media(max-width: 698px)": {
    backgroundSize: "100vh 100vw"
    //width: "100vw"
  }
});
let overlayHero = css({
  height: 300,
  //backgroundColor: "rgba(107,232,144,0.5)",
  backgroundColor: "rgba(0,0,0,0.5)",
  position: "absolute",
  top: 0,
  width: "100%",
  "@media(max-width: 698px)": {
    height: 300
    //width: "100vw"
  }
});

let socialMediaBar = css({
  margin: "30px 0 0 30px",
  "@media(max-width: 698px)": {
    textAlign: "center",
    //border: "2px solid red",
    margin: "30px 0 0 0"
  }
});

let downloadResumeButton = css({
  position: "absolute",
  top: 30,
  right: 30,
  "@media(max-width: 698px)": {
    display: "none"
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
      <div>
        <div
          style={{
            fontFamily: "Open Sans Condensed",
            zIndex: 1
          }}
        >
          <ScrollableAnchor id={"newTop"}>
            <div />
          </ScrollableAnchor>
          <div {...backgroundHero} />
          <div {...overlayHero} style={{ zIndex: 1 }}>
            <div {...socialMediaBar}>
              <SocialMedia size={50} />
            </div>
            <div {...downloadResumeButton}><DownloadResume size={50} /></div>
            <div {...headerText}>

              <h1 {...heroText}>
                SIMON GODEFROID
              </h1>
              <p {...descText}>
                RECHERCHE START UP POUR REJOINDRE UNE ÉQUIPE DE DEVS !!!<br />
                Web and Mobile Full-Stack JavaScript Developper ReactJS & React
                Native
                <br />
                Movie Maniac
              </p>
            </div>
            <div {...imageHolder}>
              <img
                {...imageLanding}
                src="./assets/img/simongodefroid.png"
                alt="Simon GODEFROID"
              />
            </div>

          </div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
