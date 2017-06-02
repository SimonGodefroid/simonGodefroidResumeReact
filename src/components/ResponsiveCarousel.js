import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

console.log("window", window.innerWidth);

export default class ResponsiveCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThumbs: true,
      color: "green",
      fontSize: "30px",
      fontColor: "purple",
      marginLeft: "auto"
    };
  }

  updateDimensions() {
    console.log("update color");
    console.log("this.state.fontSize", this.state.fontSize);
    // si la fenetre devient plus petite que 500px on resize en passant les states suivants...
    if (window.innerWidth < 500) {
      this.setState({ color: "brown" });
      this.setState({ showThumbs: false });
      this.setState({ fontSize: "10px" });
      this.setState({ fontColor: "yellow" });
      this.setState({ marginLeft: window.innerWidth / 8 + 30 });
    } else {
      //  sinon on update le state en passant les valeurs qu'on veut
      let update_color = "pink";
      let update_showThumbs = true;
      let update_font = "30px";
      let update_fontColor = "red";
      let update_marginLeft = "auto";
      this.setState({ color: update_color });
      this.setState({ showThumbs: update_showThumbs });
      this.setState({ fontSize: update_font });
      this.setState({ fontColor: update_fontColor });
      this.setState({ marginLeft: update_marginLeft });
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
      <div
        style={{
          borderColor: window.innerWidth <= 698 ? this.state.color : "blue",
          borderStyle: "solid",
          borderWidth: "2px",
          width: "40%",
          height: "40%",
          textAlign: "center",
          marginLeft: this.state.marginLeft,
          marginRight: "auto"
        }}
      >
        <Carousel
          showArrows={false}
          showThumbs={this.state.showThumbs}
          infiniteLoop
          emulateTouch
          width={window.innerWidth <= 698 ? "200px" : "100%"}
        >

          <div>

            <img src="/assets/img/1_moveet_landing.jpg" alt="" />
            <p
              className="legend"
              style={{
                color: this.state.fontColor,
                fontSize: this.state.fontSize
              }}
            >
              Explorez les films par genre
            </p>
          </div>
          <div>
            <img src="/assets/img/2_moveet_results.jpg" alt="" />
            <p
              className="legend"
              style={{
                color: "white",
                fontSize: window.innderWidth <= 698 ? "10px" : "30px"
              }}
            >
              Parcourez les sorties et les films à venir
            </p>

          </div>
          <div>
            <img src="/assets/img/3_moveet_movie.jpg" alt="" />
            <p
              className="legend"
              style={{
                color: "white",
                fontSize: window.innderWidth <= 698 ? "20px" : "30px"
              }}
            >
              Parcourez les sorties et les films à venir

            </p>

          </div>
          <div>
            <img src="/assets/img/4_moveet_showtimes.jpg" alt="" />
            <p
              className="legend"
              style={{
                color: "white",
                fontSize: window.innderWidth <= 698 ? "20px" : "30px"
              }}
            >
              Parcourez les sorties et les films à venir

            </p>

          </div>
          <div>
            <img src="/assets/img/5_moveet_buddyfinder.jpg" alt="" />
            <p
              className="legend"
              style={{
                color: "white",
                fontSize: window.innderWidth <= 698 ? "20px" : "30px"
              }}
            >
              Parcourez les sorties et les films à venir

            </p>

          </div>
          <div>
            <img src="/assets/img/6_moveet_swiper.jpg" alt="" />
            <p
              className="legend"
              style={{
                color: "white",
                fontSize: window.innderWidth <= 698 ? "20px" : "30px"
              }}
            >
              Parcourez les sorties et les films à venir

            </p>

          </div>
          <div>
            <img src="/assets/img/7_moveet_swiper_yes.jpg" alt="" />
            <p
              className="legend"
              style={{
                color: "white",
                fontSize: window.innderWidth <= 698 ? "20px" : "30px"
              }}
            >
              Parcourez les sorties et les films à venir

            </p>

          </div>
          <div>
            <img src="/assets/img/7_moveet_swiper_yes.jpg" alt="" />
            <p
              className="legend"
              style={{
                color: "white",
                fontSize: window.innderWidth <= 698 ? "20px" : "30px"
              }}
            >
              Parcourez les sorties et les films à venir

            </p>

          </div>

        </Carousel>
      </div>
    );
  }
}
