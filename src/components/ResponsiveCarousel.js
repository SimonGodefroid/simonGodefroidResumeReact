import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import Slides from './Slides';

console.log("window", window.innerWidth);

let imagesMoveet = [
  {
    url: "./assets/img/1_moveet_landing.jpg",
    alt: 'moveet_landing',
    legend: '"Explorez les films par genre"'
  },
  {
    url: "./assets/img/1_moveet_landing.jpg",
    alt: 'moveet_landing',
    legend: '"Explorez les films par genre"'
  },
  {
    url: "./assets/img/1_moveet_landing.jpg",
    alt: 'moveet_landing',
    legend: '"Explorez les films par genre"'
  },
  {
    url: "./assets/img/1_moveet_landing.jpg",
    alt: 'moveet_landing',
    legend: '"Explorez les films par genre"'
  },
  {
    url: "./assets/img/1_moveet_landing.jpg",
    alt: 'moveet_landing',
    legend: '"Explorez les films par genre"'
  }
]

export default class ResponsiveCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThumbs: true,
      color: "green",
      fontSize: "30px",
      fontColor: "red",
      marginLeft: "auto",
      padding: "0 auto",
    };
  }

  updateDimensions() {
    console.log("update color");
    console.log("this.state.fontSize", this.state.fontSize);
    // si la fenetre devient plus petite que 500px on resize en passant les states suivants...
    if (window.innerWidth < 500) {
      this.setState({ color: "red" });
      this.setState({ fontSize: "10px" });
      this.setState({ fontColor: "yellow" });
      this.setState({ padding: "0" });
    } else {
      //  sinon on update le state en passant les valeurs qu'on veut
      let update_color = "pink";
      let update_font = "30px";
      let update_fontColor = "red";
      let update_padding = "0 20%";
      this.setState({ color: update_color });
      this.setState({ fontSize: update_font });
      this.setState({ fontColor: update_fontColor });
      this.setState({ padding: update_padding });
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  renderSlides(images) {

    const slides = images.map((image, key) => {
      return (
        < Slides
          key={key}
          url={image.url}
          alt={image.alt}
          legend={image.legend}
          fontColor={this.state.fontColor}
          fontSize={this.state.fontSize} />
      )
    })
    return slides
  }

  render() {
    return (
      <div style={{ padding: this.state.padding }}>
        < Carousel
          showArrows={false}
          showThumbs={false}
          infiniteLoop
          emulateTouch
        >
          {this.renderSlides(imagesMoveet)}
        </Carousel>
      </div>
    );
  }
}
