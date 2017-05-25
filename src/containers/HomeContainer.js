import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import ScrollableAnchor from "react-scrollable-anchor";
import Header from "../components/Header.js";
import Image from "../components/Image.js";
import BackToTop from "../components/BackToTop.js";
import { css } from "glamor";
import Anime from "react-anime";
import Carousel from "nuka-carousel";

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
              <StickyContainer style={{ marginBottom: 1000 }}>
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
                  <h2 {...titles}> QUI SUIS-JE ?</h2>
                </ScrollableAnchor>

                <p {...paragraphs}>
                  Après une carrière de 4 ans dans le business, deux ans en analyste financier chez General Electric Capital et deux années en Project Manager et Business Development Manager chez Rocket Internet, qui m 'ont vu travailler dans 7 pays d'
                  Asie du Sud - Est et vivre à Singapour, j 'ai décidé d'
                  apprendre à coder afin de redonner un élan à ma carrière, pouvoir coder mes propres MVP et aussi pouvoir élargir mes horizons. J'ai donc suivi 3 mois de formation intensive au Reacteur puis ai développé mon propre MVP sur une application de dating/buddying en rapport au cinéma.
                </p>

                <div>
                  {/*//https://www.hawatel.com/blog/handle-window-resize-in-react
                  //http://stackoverflow.com/questions/19014250/reactjs-rerender-on-browser-resize
                  //https://reactcommunity.org/react-tabs/example/*/}
                </div>
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
                <ScrollableAnchor id={"myprojects"}>
                  <h2 {...titles}>MES PROJETS</h2>
                </ScrollableAnchor>
                <div>
                  <h3>Moveet 04/2017 - 05/2017</h3>
                  <p>
                    Moveet est une application sur laquelle j'ai travaillé seul et qui m'a pris 2 mois à développer. Il s'agit d'un MVP d'une application que j'ai toujours voulu avoir et qui n'existe pas sous cette forme, qui permet de trouver des buddies pour aller voir des films et chatter avec eux. Moveet a pour vocation de permettre à tous de vivre pleinement leur cinéphilie plutôt que d'aller voir des films qu'ils n'ont pas envie de voir... pour suivre leurs potes.
                    Pour le code c'est ici pour le front et là pour le back.
                    <br />
                    {" "}
                    NB: les gifs sont sur le repo du front.
                    NB2: j'aimerai lancer cette application en BETA, contactez-moi si vous êtes intéressé !
                  </p>
                  <Carousel>
                    <img
                      src="http://placehold.it/1000x400/ffffff/c0392b/&amp;text=slide1"
                    />
                    <img
                      src="http://placehold.it/1000x400/ffffff/c0392b/&amp;text=slide2"
                    />
                    <img
                      src="http://placehold.it/1000x400/ffffff/c0392b/&amp;text=slide3"
                    />
                    <img
                      src="http://placehold.it/1000x400/ffffff/c0392b/&amp;text=slide4"
                    />
                    <img
                      src="http://placehold.it/1000x400/ffffff/c0392b/&amp;text=slide5"
                    />
                    <img
                      src="http://placehold.it/1000x400/ffffff/c0392b/&amp;text=slide6"
                    />
                  </Carousel>

                  <h3>Albert</h3>
                  <p>
                    Albert est une application que nous avons créée à 4 lors de la formation du Reacteur. Albert est une application lifestyle qui permet aux utilisateurs de trouver des événements et des lieux en fonction de ses envies et autour de 8 univers. Ma part de réalisation dans ce projet a été 60% sur le back-end avec mongoDB, Express et 40% sur le front-end en React Native. Pour voir le code source c'est ici pour le front et là pour le back.
                  </p>
                  <Carousel>

                    <img
                      src="http://placehold.it/1000x400/ffffff/c0392b/&amp;text=slide1"
                    />
                    <img
                      src="http://placehold.it/1000x400/ffffff/c0392b/&amp;text=slide2"
                    />
                    <img
                      src="http://placehold.it/1000x400/ffffff/c0392b/&amp;text=slide3"
                    />
                    <img
                      src="http://placehold.it/1000x400/ffffff/c0392b/&amp;text=slide4"
                    />
                    <img
                      src="http://placehold.it/1000x400/ffffff/c0392b/&amp;text=slide5"
                    />
                    <img
                      src="http://placehold.it/1000x400/ffffff/c0392b/&amp;text=slide6"
                    />
                  </Carousel>
                </div>
              </StickyContainer>
            </div>
          </div>
        </div>
        {/*<div>
        //   {[1, 2, 3, 4, 5, 6, 7, 8].map(i => {
        //     return (
        //       <StickyContainer
        //         key={i}
        //         style={{ height: 1000, background: `hsl(${i * 40}, 70%, 90%)` }}
        //       >
        //         <Sticky>
        //           {(
        //             {
        //               isSticky,
        //               wasSticky,
        //               style,
        //               distanceFromTop,
        //               distanceFromBottom,
        //               calculatedHeight
        //             }
        //           ) => {
        //             return (
        //               <div
        //                 style={{
        //                   ...style,
        //                   height: 80,
        //                   background: `hsl(${i * 40}, 70%, 50%)`
        //                 }}
        //               >
        //                 <h2
        //                   style={{
        //                     lineHeight: "80px",
        //                     padding: "0 15px",
        //                     margin: 0
        //                   }}
        //                 >
        //                   <span className="pull-left">
        //                     &lt;Sticky #{i} /&gt;
        //                   </span>
        //                 </h2>
        //               </div>
        //             );
        //           }}
        //         </Sticky>

        //         <h2 className="text-center" style={{ marginTop: 150 }}>
        //           &lt;StickyContainer #{i} /&gt;
        //         </h2>
        //       </StickyContainer>
        //     );
        //   })}
      // </div>*/}

        <BackToTop path={""} />
      </div>
    );
  }
}

//http://jl-.github.io/react-slide-deck/
//http://kenwheeler.github.io/slick/
//http://react-responsive-carousel.js.org/storybook/?selectedKind=Carousel&selectedStory=emulate%20touch&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel
