import React, { PropTypes, Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.css";

export default class ResponsiveCarousel extends Component {
  render() {
    return (
      <Carousel showArrows={false} infiniteLoop emulateTouch>
        <div>

          <img src="/assets/img/moveet_landing.jpg" />
          <p className="legend">
            Explorez les films par genre
          </p>
        </div>
        <div>
          <img src="/assets/img/moveet_results.jpg" />
          <p className="legend">
            Parcourez les sorties et les films à venir

          </p>

        </div>
        <div>
          <img src="/assets/img/moveet_results.jpg" />
          <p className="legend">
            Parcourez les sorties et les films à venir

          </p>

        </div>
        <div>
          <img src="/assets/img/moveet_results.jpg" />
          <p className="legend">
            Parcourez les sorties et les films à venir

          </p>

        </div>
        <div>
          <img src="/assets/img/moveet_results.jpg" />
          <p className="legend">
            Parcourez les sorties et les films à venir

          </p>

        </div>

      </Carousel>
    );
  }
}
