import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import ScrollableAnchor from "react-scrollable-anchor";
import Header from "../components/Header.js";
import ResponsiveCarousel from "../components/ResponsiveCarousel";
import ToolBelt from "../components/Toolbelt.js";
import BackToTop from "../components/BackToTop.js";
import { css } from "glamor";
import MyMap from "../components/MyMap";
import TabsComponent from "../components/TabsComponent";
import Stack from "../components/Stack";
import Anchor from "../components/Anchor";
import Footer from "../components/Footer";


// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms

let containerJs = css({
  paddingTop: 60,
  color: "black"
});

let projectTitle = css({
  margin: "10px",
  fontWeight: 700
});
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
      width: 800,
      height: 182
    };
  }

  updateDimensions() {
    console.log("update dimensions");
    if (window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width = window.innerWidth - 100;
      let update_height = Math.round(update_width / 4.4);
      this.setState({ width: update_width, height: update_height });
    }
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
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
                    margin: "30px 0 100px 0",
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
                    <div>
                      <div>
                        <h3 {...projectTitle}>Moveet 04/2017 - 05/2017</h3>
                        <p {...paragraphs}>
                          Moveet est une application sur laquelle j'ai travaillé seul et qui m'a pris 2 mois à développer. Il s'agit d'un MVP d'une application que j'ai toujours voulu avoir et qui n'existe pas sous cette forme. Moveet permet de se constituer un pipeline de films et de trouver des buddies pour aller voir des films et chatter avec eux. Moveet a pour vocation de permettre à tous de vivre pleinement leur cinéphilie plutôt que d'aller voir des films qu'ils n'ont pas envie de voir... pour suivre leurs potes.
                          Pour le code c'est
                          {" "}
                          <a
                            href="https://github.com/SimonGodefroid/moveetBack"
                            target="blank"
                          >
                            {" "}ici
                          </a>
                          {" "}pour le front et
                          {" "}
                          <a
                            href="https://github.com/SimonGodefroid/moveetBack"
                            target="blank"
                          >
                            là
                          </a>
                          {" "}
                          pour le back.
                        </p>
                        <div {...paragraphs}>
                          FEATURES:
                          <ul>
                            <li> # Films à l'affiche</li>
                            <li> # Chat</li>
                            <li> # Buddy Finder</li>
                            <li> # Géolocalisation</li>
                            <li> # Movies Swiper</li>
                            <li> # Movies Matching</li>
                          </ul>
                        </div>
                        <p style={{ marginTop: 5 }} {...paragraphs}>
                          {" "}
                          <span>NB:</span> les gifs sont sur le repo du front.
                          <br />
                          <span>NB2:</span> je lance l'application en BETA, contactez-moi si vous êtes intéressé !<br />
                          <span>NB3:</span> j'ai fait une petite présentation Spectacle,
                          {" "}
                          <a
                            href="http://fortunate-wish.surge.sh/"
                            target="blank"
                          >
                            ici
                          </a>
                          {" "}
                          pour présenter l'application.
                        </p>
                        <div
                          style={{
                            margin: "0 30px",
                          }}
                        >
                          <ResponsiveCarousel />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h3 {...projectTitle}>Albert 03/2017</h3>
                        <p {...paragraphs}>
                          Albert est une application que nous avons créée à 4 lors de la formation du Reacteur. Albert est une application lifestyle qui permet aux utilisateurs de trouver des événements et des lieux en fonction de ses envies et autour de 8 univers. Ma part de réalisation dans ce projet a été 60% sur le back-end avec mongoDB, Express et 40% sur le front-end en React Native. Pour voir le code source c'est ici pour le front et là pour le back.
                        </p>
                      </div>
                    </div>
                    <BackToTop />
                  </div>
                  <Anchor path={"resume"} title={"MON CV"} />
                  <div {...card}>
                    <TabsComponent />
                    <BackToTop />
                  </div>
                  <Anchor path={"about"} title={"À PROPOS DU SITE"} />
                  <div {...card}>
                    <p {...paragraphs}>
                      J'ai construit ce site en React afin de m'exercer à utiliser de nouveaux composants et packages. Parmi ceux-ci:
                    </p>
                    <ul>
                      <li>
                        <a
                          href="https://github.com/threepointone/glamor"
                          target="blank"
                        >
                          Glamor
                        </a>

                        - pour écrire du styling en js à la CSS
                      </li>
                      <li>
                        <a
                          href="https://github.com/tomchentw/react-google-maps"
                          target="blank"
                        >
                          React Google Maps
                        </a>

                        - pour me situer sur une carte
                      </li>
                      <li>
                        <a
                          href="https://github.com/gorangajic/react-icons"
                          target="blank"
                        >
                          React Icons
                        </a>

                        - pour les icônes Social Media
                      </li>
                      <li>
                        <a
                          href="https://github.com/captivationsoftware/react-sticky"
                          target="blank"
                        >
                          React Sticky
                        </a>
                        {" "}
                        - pour le Sticky Header
                      </li>
                      <li>
                        <a
                          href="https://github.com/leandrowd/react-responsive-carousel"
                          target="blank"
                        >
                          React Responsive Carousel
                        </a>
                        {" "}
                        - pour les screens de Moveet
                      </li>
                      <li>
                        <a
                          href="https://github.com/reactjs/react-tabs"
                          target="blank"
                        >
                          React Tabs
                        </a>
                        {" "}
                        - pour les rubiques de mon CV
                      </li>
                    </ul>
                    <BackToTop />
                  </div>
                  <Anchor path={"map"} title={"OÙ ME TROUVER ?"} />
                  <div {...card}>
                    <MyMap />
                    <BackToTop />
                  </div>
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
