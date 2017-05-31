import React, { PropTypes, Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import { css } from "glamor";
import "react-responsive-carousel/lib/styles/carousel.css";

console.log("window", window.innerWidth);

export default class ResponsiveCarousel extends Component {
  render() {
    return (
      <div style={{ marginLeft: window.innerWidth <= 698 ? "0px" : "274px" }}>
        <Carousel
          showArrows={false}
          infiniteLoop
          emulateTouch
          width={window.innerWidth <= 698 ? "200px" : "500px"}
          style={{ marginLeft: "100px" }}
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
