import React, { PropTypes, Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import { css } from "glamor";
import "react-responsive-carousel/lib/styles/carousel.css";

console.log("window", window.innerWidth);

export default class ResponsiveCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbs: "",
      color: "green"
      //width: 400,
      //height: 200,
      //margin: 0
    };
  }

  updateDimensions() {
    console.log("update color");
    if (window.innerWidth < 500) {
      //this.setState({ width: 450, height: 102 });
      this.setState({ color: "brown" });
    } else {
      let update_color = "pink";
      this.setState({ color: update_color });
      // let update_width = window.innerWidth - 100;
      // let update_height = Math.round(update_width / 4.4);
      // this.setState({ width: update_width, height: update_height });
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
          width: "100%",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Carousel
          showArrows={false}
          showThumbs={this.state.thumbs}
          infiniteLoop
          emulateTouch
          width={window.innerWidth <= 698 ? "200px" : "70%"}
        >

          <div>

            <img src="/assets/img/1_moveet_landing.jpg" />
            <p
              className="legend"
              style={{
                color: "white",
                fontSize: window.innderWidth <= 698 ? "10px" : "30px"
              }}
            >
              Explorez les films par genre
            </p>
          </div>
          <div>
            <img src="/assets/img/2_moveet_results.jpg" />
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
            <img src="/assets/img/3_moveet_movie.jpg" />
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
            <img src="/assets/img/4_moveet_showtimes.jpg" />
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
            <img src="/assets/img/5_moveet_buddyfinder.jpg" />
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
            <img src="/assets/img/6_moveet_swiper.jpg" />
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
            <img src="/assets/img/7_moveet_swiper_yes.jpg" />
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
            <img src="/assets/img/7_moveet_swiper_yes.jpg" />
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
