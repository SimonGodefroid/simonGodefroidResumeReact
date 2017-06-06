import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import Slides from './Slides';

console.log("window", window.innerWidth);

let imagesMoveet = [
  {
    url: "./assets/img/moveet_landing_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'Explorez les films par genre'
  },
  {
    url: "./assets/img/moveet_results_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'Découvrez vos prochains coups de coeur'
  },
  {
    url: "./assets/img/moveet_movie_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'Accèdez aux informations sur le film'
  },
  {
    url: "./assets/img/moveet_buddyfinder_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'Trouvez un buddy passionné pour aller avec vous'
  },
  {
    url: "./assets/img/moveet_buddyprofile_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'Comparez vos pipelines de films'
  },
  {
    url: "./assets/img/moveet_showtimes_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'Trouvez les horaires pour le film'
  },
  {
    url: "./assets/img/moveet_buddieslist_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'Parcourez la liste des buddies et des matches'
  },
  {
    url: "./assets/img/1_moveet_landing.jpg",
    alt: 'moveet_landing',
    legend: 'Chattez avec vos buddies'
  },
  {
    url: "./assets/img/moveet_swiper_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'Swippez pour constituer votre pipeline de films'
  },
  {
    url: "./assets/img/moveet_swiper_yes_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'À droite pour ajouter le film à votre pipeline'
  },
  {
    url: "./assets/img/moveet_swiper_no_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'À gauche pour le zapper'
  },
  {
    url: "./assets/img/moveet_aroundme_theaters_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'Dénichez les cinémas autour de vous'
  },
  {
    url: "./assets/img/1_moveet_landing.jpg",
    alt: 'moveet_landing',
    legend: 'Dévoilez les passionnés qui vous entourent'
  },
  {
    url: "./assets/img/moveet_profile_page_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'Visionnez votre profil'
  },
  {
    url: "./assets/img/moveet_profile_page_2_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'Consultez votre pipeline depuis celui-ci'
  }, {
    url: "./assets/img/moveet_edit_profile_2_lowq.jpg",
    alt: 'moveet_landing',
    legend: 'Gérez vos informations personnelles'
  }
]

export default class ResponsiveCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThumbs: true,
      color: "green",
      fontSize: "20px",
      fontColor: "white",
      marginLeft: "auto",
      padding: "0 auto",
    };
  }

  updateDimensions() {
    console.log("update color");
    console.log("this.state.fontSize", this.state.fontSize);
    // si la fenetre devient plus petite que 500px on resize en passant les states suivants...
    if (window.innerWidth < 500) {
      this.setState({ fontSize: "10px" });
      this.setState({ padding: "0" });
    } else {
      //  sinon on update le state en passant les valeurs qu'on veut
      let update_font = "20px";
      let update_padding = "0 30%";
      this.setState({ fontSize: update_font });
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
          fontSize={this.state.fontSize} />
      )
    })
    return slides
  }

  render() {
    return (
      <div style={{ padding: this.state.padding, marginTop: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: 700, padding: '20px' }}>MOVEET</p>
        </div>
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
