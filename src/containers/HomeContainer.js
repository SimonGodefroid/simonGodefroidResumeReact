import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import ScrollableAnchor from "react-scrollable-anchor";
import Header from "../components/Header.js";
import Image from "../components/Image.js";
import ResponsiveCarousel from "../components/ResponsiveCarousel";
import BackToTop from "../components/BackToTop.js";
import { css } from "glamor";
import Anime from "react-anime";
import Carousel from "nuka-carousel";
import MyMap from "../components/MyMap";
import TabsComponent from "../components/TabsComponent";
let containerJs = css({
  paddingTop: 60,
  color: "black"
});
let paragraphs = css({
  padding: "20px",
  color: "black",
  "@media(max-width: 698px)": {
    textAlign: "justify"
  }
});
let titles = css({
  padding: "20px",
  marginBottom: "40px",
  "@media(max-width: 698px)": {
    textAlign: "center",
    paddingTop: "100px",
    marginBottom: "0px"
  }
});

//let stackImages = css({});

export default class Home extends React.Component {
  render() {
    return (
      <div
        className={"container"}
        style={{
          fontFamily: "Circular"
        }}
      >

        <div className={"row"}>
          <div className={"col-lg-12 col-md-12 col-xs-12"} {...containerJs}>
            <div className={"resume"}>
              <StickyContainer
                style={{
                  marginBottom: 500,

                  background: "#ddd",
                  padding: "0 30px"
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
                <div className={"card"}>
                  <ScrollableAnchor id={"whoiam"}>
                    <h2 {...titles}> QUI SUIS-JE ?</h2>
                  </ScrollableAnchor>

                  <p {...paragraphs}>
                    Après une carrière de 4 ans dans le business, deux ans en analyste financier chez General Electric Capital et deux années en Project Manager et Business Development Manager chez Rocket Internet, qui m 'ont vu travailler dans 7 pays d'
                    Asie du Sud - Est et vivre à Singapour, j 'ai décidé d'
                    apprendre à coder afin de redonner un élan à ma carrière, pouvoir coder mes propres MVP et aussi pouvoir élargir mes horizons. J'ai donc suivi 3 mois de formation intensive au Reacteur puis ai développé mon propre MVP sur une application de dating/buddying en rapport au cinéma.
                  </p>
                </div>

                {/*//https://www.hawatel.com/blog/handle-window-resize-in-react
                  //http://stackoverflow.com/questions/19014250/reactjs-rerender-on-browser-resize
                  //https://reactcommunity.org/react-tabs/example/*/}
                <div className={"card"}>
                  <ScrollableAnchor id={"mystack"}>
                    <h2 {...titles}>MON STACK</h2>
                  </ScrollableAnchor>
                  <div
                    style={{
                      textAlign: "center",
                      verticalAlign: "top"
                    }}
                  >
                    <Image
                      source={"./assets/img/html.png"}
                      height={100}
                      padding={"10px 20px"}
                    />
                    <Image
                      source={"./assets/img/css.png"}
                      height={100}
                      padding={"10px 20px"}
                    />
                    <Image
                      source={"./assets/img/js.png"}
                      height={100}
                      padding={"10px 20px"}
                    />
                    <Image
                      source={"./assets/img/express.png"}
                      height={100}
                      padding={"10px 20px"}
                    />
                    <Image
                      source={"./assets/img/mongo.png"}
                      height={100}
                      padding={"10px 20px"}
                    />
                    <Image
                      source={"./assets/img/nodejs.png"}
                      height={100}
                      padding={"10px 20px"}
                    />
                    <Image
                      source={"./assets/img/react native.png"}
                      height={100}
                      padding={"10px 20px"}
                    />
                    <Image
                      source={"./assets/img/react.png"}
                      height={100}
                      padding={"10px 20px"}
                    />

                  </div>
                </div>
                <div className={"card"}>
                  <ScrollableAnchor id={"myprojects"}>
                    <h2 {...titles}>MES PROJETS</h2>
                  </ScrollableAnchor>
                  <div>
                    <h3 style={{ margin: 10 }}>Moveet 04/2017 - 05/2017</h3>
                    <p>
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
                    <p style={{ marginTop: 10 }}>
                      {" "}
                      NB: les gifs sont sur le repo du front.
                      <br />
                      NB2: je lance l'application en BETA, contactez-moi si vous êtes intéressé !
                      NB3: j'ai fait une petite présentation Spectacle,
                      {" "}
                      <a href="http://fortunate-wish.surge.sh/" target="blank">
                        ici
                      </a>
                      {" "}
                      pour présenter l'application.
                    </p>
                    <ResponsiveCarousel />
                  </div>
                  <div>
                    <h3 style={{ margin: 10 }}>Albert 03/2017</h3>
                    <p>
                      Albert est une application que nous avons créée à 4 lors de la formation du Reacteur. Albert est une application lifestyle qui permet aux utilisateurs de trouver des événements et des lieux en fonction de ses envies et autour de 8 univers. Ma part de réalisation dans ce projet a été 60% sur le back-end avec mongoDB, Express et 40% sur le front-end en React Native. Pour voir le code source c'est ici pour le front et là pour le back.
                    </p>
                    <ResponsiveCarousel />
                  </div>
                </div>
                <div className={"card"}>
                  <ScrollableAnchor id={"resume"}>
                    <h2 {...titles}>MON CV</h2>
                  </ScrollableAnchor>
                  <TabsComponent />
                </div>
                <div className={"card"}>
                  <ScrollableAnchor id={"map"}>
                    <h2 {...titles}>OÙ ME TROUVER ?</h2>
                  </ScrollableAnchor>
                  <div style={{ marginBottom: "50px", pointerEvents: "none" }}>
                    <MyMap />
                  </div>

                </div>
                <div className={"card"}>
                  <ScrollableAnchor id={"map"}>
                    <h2 {...titles}>À PROPOS DU SITE</h2>
                  </ScrollableAnchor>
                  <p>
                    J'ai construit ce site en React afin de m'exercer à utiliser de nouveaux composants et packages. Parmi ceux-ci:
                    <ul>
                      <li>Glamor - pour écrire du styling en js à la CSS</li>
                      <li>React Google Maps - pour me situer sur une carte</li>
                      <li>React Icons - pour les icônes Social Media</li>
                      <li>React Sticky - pour les icônes Social Media</li>
                      <li>
                        React Responsive Carousel - pour les screens de Moveet et Albert
                      </li>
                      <li>React Tabs - pour les rubiques de mon CV</li>
                      <li>React Sticky - pour les icônes Social Media</li>
                    </ul>
                    {" "}
                  </p>
                </div>
              </StickyContainer>
            </div>
          </div>

        </div>
        <BackToTop path={"#"} />
      </div>
    );
  }
}

//http://react-responsive-carousel.js.org/storybook/?selectedKind=Carousel&selectedStory=emulate%20touch&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel
