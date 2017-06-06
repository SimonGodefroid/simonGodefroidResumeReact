import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import ScrollableAnchor from "react-scrollable-anchor";
import Header from "../components/Header.js";
import ToolBelt from "../components/Toolbelt.js";
import BackToTop from "../components/BackToTop.js";
import { css } from "glamor";
import MyMap from "../components/MyMap";
import TabsComponent from "../components/TabsComponent";
import Stack from "../components/Stack";
import Anchor from "../components/Anchor";
import Footer from "../components/Footer";
import Teachers from "../components/Teachers";

import Projects from "../components/Projects";
import About from "../components/About";

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms

let containerJs = css({
  paddingTop: 60,
  color: "black",
  "@media(max-width: 698px)": {
    paddingTop: 30,
  }
});


let button = css({
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  padding: 10,
  outline: 'none',
  width: '140px'
})


let paragraphs = css({
  padding: "20px",
  fontWeight: 300,
  color: "black",
  "@media(max-width: 698px)": {
    textAlign: "justify"
  }
});


let card = css({
  padding: "20px",
  border: "0.5px black solid",
  borderRadius: "3px",
  backgroundColor: "white",
  background: "rgba(255,241,216,0.2)",
  marginBottom: "20px",
  "@media(max-width: 698px)": {
    textAlign: "center",
    padding: "20px 0 0 0 ",
    marginBottom: "0px"
  }
});


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapControlActive: false
    }
  }


  render() {
    return (
      <div>
        <div
          style={{
            fontFamily: "Open Sans Condensed, Circular,Sans-serif"
          }}
        >
          <ScrollableAnchor id={"whoiam"}><div /></ScrollableAnchor>
          <div className={"row"} style={{ margin: 0 }}>
            <div className={"col-lg-12 col-md-12 col-xs-12"} {...containerJs}>
              <div>
                <StickyContainer
                  style={{
                    margin: "30px 0 40px 0",
                    width: "100%"
                  }}
                >
                  <Sticky>
                    {(
                      {
                        isSticky,
                        wasSticky,
                        style,
                        distanceFromTop,
                        distanceFromBottom,
                        calculatedHeight
                      }
                    ) => {
                      console.log({
                        distanceFromTop
                      });
                      return <Header style={style} />;
                    }}
                  </Sticky>
                  <Anchor path={"whoiam"} title={"QUI SUIS-JE?"} />
                  <div {...card}>
                    <p {...paragraphs}>
                      Après une carrière de 4 ans dans le business, deux ans en analyste financier chez General Electric Capital et deux années en Project Manager et Business Development Manager chez Rocket Internet, qui m 'ont vu travailler dans 7 pays d'
                      Asie du Sud - Est et vivre à Singapour, j 'ai décidé d'
                      apprendre à coder afin de redonner un élan à ma carrière, pouvoir coder mes propres MVP et aussi pouvoir élargir mes horizons. J'ai donc suivi 3 mois de formation intensive au Reacteur puis ai développé mon propre MVP sur une application de dating/buddying en rapport au cinéma.
                    </p>
                    <BackToTop />
                  </div>
                  <Anchor path={"mystack"} title={"MON STACK"} />
                  <div {...card}>
                    <Stack />
                    <BackToTop />
                  </div>
                  <Anchor path={"mytoolbelt"} title={"MA TOOLBELT"} />
                  <div {...card}>
                    <ToolBelt />
                    <BackToTop />
                  </div>
                  <Anchor path={"myprojects"} title={"MES PROJETS"} />
                  <div {...card}>
                    <Projects />
                    <BackToTop />
                  </div>
                  <Anchor path={"resume"} title={"MON CV"} />
                  <div {...card}>
                    <TabsComponent />

                    <BackToTop />
                  </div>
                  <Anchor path={"about"} title={"À PROPOS DU SITE"}
                  />
                  <div {...card}>
                    <About />
                    <BackToTop />
                  </div>
                  <Anchor path={"map"} title={"OÙ ME TROUVER ?"} />
                  <div {...card} style={{ position: 'relative' }}>
                    <MyMap pointer={this.state.mapControlActive} />
                    <div style={{ textAlign: 'center' }}>
                      <button {...button} onClick={() => { this.setState({ mapControlActive: !this.state.mapControlActive }) }}>{this.state.mapControlActive === false ? "Activer la map" : "Désactiver la map"}</button>
                    </div>
                    <BackToTop />
                  </div>
                  <Teachers {...paragraphs} />

                </StickyContainer>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

//http://react-responsive-carousel.js.org/storybook/?selectedKind=Carousel&selectedStory=emulate%20touch&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel
