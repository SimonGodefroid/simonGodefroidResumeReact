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
          width={window.innerWidth <= 698 ? "256px" : "500px"}
          style={{ marginLeft: "100px" }}
        >

          <div>

            <img src="/assets/img/moveet_landing.jpg" />
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
            <img src="/assets/img/moveet_results.jpg" />
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
            <img src="/assets/img/moveet_results.jpg" />
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
            <img src="/assets/img/moveet_results.jpg" />
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
            <img src="/assets/img/moveet_results.jpg" />
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
