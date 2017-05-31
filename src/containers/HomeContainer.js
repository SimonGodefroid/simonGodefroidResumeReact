import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import ScrollableAnchor from "react-scrollable-anchor";
import Header from "../components/Header.js";
import Image from "../components/Image.js";
import ResponsiveCarousel from "../components/ResponsiveCarousel";
import BackToTop from "../components/BackToTop.js";
import { css } from "glamor";
import MyMap from "../components/MyMap";
import TabsComponent from "../components/TabsComponent";
import { configureAnchors } from "react-scrollable-anchor";
import SocialMedia from "../components/SocialMedia";
import IHeartCode from "../components/IHeartCode";

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({ offset: -78, scrollDuration: 300 });
let containerJs = css({
  paddingTop: 60,
  color: "black",
  backgroundColor: "blue"
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
let titles = css({
  paddingTop: "0px",
  fontFamily: "Open Sans Condensed",
  fontWeight: 700,
  marginTop: "10px",
  marginBottom: "10px",
  "@media(max-width: 698px)": {
    textAlign: "center",
    padding: "20px 0",
    marginBottom: "0px"
  }
});

let card = css({
  padding: "20px",
  border: "2px black solid",
  backgroundColor: "white",
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
                    marginTop: 30,
                    marginBottom: 100,
                    background: "rgba(255,241,216,0.2)",
                    // padding: "0 30px",
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
                        isSticky,
                        wasSticky,
                        style,
                        distanceFromTop,
                        distanceFromBottom,
                        calculatedHeight
                      });
                      return <Header style={style} />;
                    }}
                  </Sticky>
                  <ScrollableAnchor id={"whoiam"}>
                    <div style={{ marginTop: "20px" }} />
                  </ScrollableAnchor>
                  <h2 {...titles}> QUI SUIS-JE ?</h2>

                  <div {...card}>

                    <p {...paragraphs}>
                      Après une carrière de 4 ans dans le business, deux ans en analyste financier chez General Electric Capital et deux années en Project Manager et Business Development Manager chez Rocket Internet, qui m 'ont vu travailler dans 7 pays d'
                      Asie du Sud - Est et vivre à Singapour, j 'ai décidé d'
                      apprendre à coder afin de redonner un élan à ma carrière, pouvoir coder mes propres MVP et aussi pouvoir élargir mes horizons. J'ai donc suivi 3 mois de formation intensive au Reacteur puis ai développé mon propre MVP sur une application de dating/buddying en rapport au cinéma.
                    </p>
                    <div style={{ textAlign: "right" }}>
                      {" "}<BackToTop path={"#newTop"} />{" "}
                    </div>
                  </div>

                  {/*//https://www.hawatel.com/blog/handle-window-resize-in-react
                  //http://stackoverflow.com/questions/19014250/reactjs-rerender-on-browser-resize
                */}
                  <ScrollableAnchor id={"mystack"}>
                    <h2 {...titles}>MON STACK</h2>
                  </ScrollableAnchor>
                  <div {...card}>
                    <div
                      style={{
                        textAlign: "center",
                        verticalAlign: "top"
                      }}
                    >
                      <Image
                        source={"./assets/img/html.png"}
                        height={100}
                        maxHeight={70}
                        padding={"10px 20px"}
                      />
                      <Image
                        source={"./assets/img/css.png"}
                        height={100}
                        maxHeight={70}
                        padding={"10px 20px"}
                      />
                      <Image
                        source={"./assets/img/js.png"}
                        height={100}
                        maxHeight={70}
                        padding={"10px 20px"}
                      />
                      <Image
                        source={"./assets/img/express.png"}
                        height={100}
                        maxHeight={70}
                        padding={"10px 20px"}
                      />
                      <Image
                        source={"./assets/img/mongo.png"}
                        height={100}
                        maxHeight={60}
                        padding={"10px 20px"}
                      />
                      <Image
                        source={"./assets/img/nodejs.png"}
                        height={100}
                        maxHeight={70}
                        padding={"10px 20px"}
                      />
                      <Image
                        source={"./assets/img/react native.png"}
                        height={100}
                        maxHeight={50}
                        padding={"10px 20px"}
                      />
                      <Image
                        source={"./assets/img/react.png"}
                        height={100}
                        maxHeight={50}
                        padding={"10px 20px"}
                      />

                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ textAlign: "right" }}>
                        {" "}<BackToTop path={"#newTop"} />{" "}
                      </div>
                    </div>
                  </div>
                  <ScrollableAnchor id={"myprojects"}>
                    <h2 {...titles}>MES PROJETS</h2>
                  </ScrollableAnchor>
                  <div {...card}>
                    <div>
                      <div className={"project"}>
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
                        <p {...paragraphs}>
                          FEATURES:
                          <br />- Films à l'affiche
                          <br />- Chat
                          <br />- Buddy Finder
                          <br />- Géolocalisation
                          <br />- Movies Swiper
                          <br />- Movies Matching
                        </p>
                        <p style={{ marginTop: 10 }} {...paragraphs}>
                          {" "}
                          NB: les gifs sont sur le repo du front.
                          <br />
                          NB2: je lance l'application en BETA, contactez-moi si vous êtes intéressé !
                          NB3: j'ai fait une petite présentation Spectacle,
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
                        <div>
                          <ResponsiveCarousel />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className={"project"}>
                        <h3 {...projectTitle}>Albert 03/2017</h3>
                        <p {...paragraphs}>
                          Albert est une application que nous avons créée à 4 lors de la formation du Reacteur. Albert est une application lifestyle qui permet aux utilisateurs de trouver des événements et des lieux en fonction de ses envies et autour de 8 univers. Ma part de réalisation dans ce projet a été 60% sur le back-end avec mongoDB, Express et 40% sur le front-end en React Native. Pour voir le code source c'est ici pour le front et là pour le back.
                        </p>
                        <ResponsiveCarousel />
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      {" "}<BackToTop path={"#newTop"} />{" "}
                    </div>
                  </div>
                  <ScrollableAnchor id={"resume"}>
                    <h2 {...titles}>MON CV</h2>
                  </ScrollableAnchor>
                  <div {...card}>
                    <TabsComponent />
                    <div style={{ textAlign: "right" }}>
                      {" "}<BackToTop path={"#newTop"} />{" "}
                    </div>
                  </div>
                  <ScrollableAnchor id={"about"}>
                    <h2 {...titles}>À PROPOS DU SITE</h2>
                  </ScrollableAnchor>
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
                        {" "}
                        - pour écrire du styling en js à la CSS
                      </li>
                      <li>
                        <a
                          href="https://github.com/tomchentw/react-google-maps"
                          target="blank"
                        >
                          React Google Maps
                        </a>
                        {" "}
                        - pour me situer sur une carte
                      </li>
                      <li>
                        <a
                          href="https://github.com/gorangajic/react-icons"
                          target="blank"
                        >
                          React Icons
                        </a>
                        {" "}
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
                        - pour les icônes Social Media
                      </li>
                      <li>
                        <a
                          href="https://github.com/leandrowd/react-responsive-carousel"
                          target="blank"
                        >
                          React Responsive Carousel
                        </a>
                        {" "}
                        - pour les screens de Moveet et Albert
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
                    <div style={{ textAlign: "right" }}>
                      {" "}<BackToTop path={"#newTop"} />{" "}
                    </div>
                  </div>
                  <ScrollableAnchor id={"map"}>
                    <h2 {...titles}>OÙ ME TROUVER ?</h2>
                  </ScrollableAnchor>
                  <div {...card}>

                    <div
                      style={{ marginBottom: "50px", pointerEvents: "none" }}
                    >
                      <MyMap />

                    </div>
                    <div style={{ textAlign: "right" }}>
                      {" "}<BackToTop path={"#newTop"} />{" "}
                    </div>
                  </div>

                </StickyContainer>
              </div>

            </div>
            {/*<IHeartCode size={80} />*/}
          </div>

        </div>
        <div
          style={{
            position: "fixed",
            display: "block",
            color: "white",
            width: "100vw",
            height: "30px",
            bottom: 0,
            padding: 10,
            fontSize: 12,
            backgroundColor: "black",
            textAlign: "center"
          }}
        >
          © Simon GODEFROID 2017

        </div>
      </div>
    );
  }
}

//http://react-responsive-carousel.js.org/storybook/?selectedKind=Carousel&selectedStory=emulate%20touch&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel
