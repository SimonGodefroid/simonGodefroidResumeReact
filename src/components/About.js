import React from "react";
import { css } from 'glamor';

let paragraphs = css({
  padding: "20px",
  fontWeight: 300,
  color: "black",
  "@media(max-width: 698px)": {
    textAlign: "justify"
  }
});


export default class BackToTop extends React.Component {
  render() {
    return (
      <div>
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

            - pour écrire du styling en js à la CSS
                      </li>
          <li>
            <a
              href="https://github.com/tomchentw/react-google-maps"
              target="blank"
            >
              React Google Maps
                        </a>

            - pour me situer sur une carte
                      </li>
          <li>
            <a
              href="https://github.com/gorangajic/react-icons"
              target="blank"
            >
              React Icons
                        </a>

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
            - pour le Sticky Header
                      </li>
          <li>
            <a
              href="https://github.com/leandrowd/react-responsive-carousel"
              target="blank"
            >
              React Responsive Carousel
                        </a>
            {" "}
            - pour les screens de Moveet
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
      </div>
    );
  }
}
