import React from "react";

import Image from "../components/Image.js";

export default class Stack extends React.Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          verticalAlign: "top"
        }}
      >
        <Image
          source={"./assets/img/react_native_logo.png"}
          height={100}
          maxHeight={60}
          padding={"10px 20px"}
          alt={"react_native_logo"}
        />
        <Image
          source={"./assets/img/react_logo.png"}
          height={100}
          maxHeight={80}
          padding={"10px 30px"}
        />
        <Image
          source={"./assets/img/html.png"}
          height={100}
          maxHeight={70}
          padding={"10px 20px"}
          alt={"html_logo"}
        />
        <Image
          source={"./assets/img/css.png"}
          height={100}
          maxHeight={70}
          padding={"10px 20px"}
          alt={"css_logo"}
        />
        <Image
          source={"./assets/img/js.png"}
          height={100}
          maxHeight={70}
          padding={"10px 20px"}
          alt={"js_logo"}
        />
        <Image
          source={"./assets/img/express.png"}
          height={100}
          maxHeight={70}
          padding={"10px 20px"}
          alt={"express_logo"}
        />
        <Image
          source={"./assets/img/mongo.png"}
          height={100}
          maxHeight={60}
          padding={"10px 20px"}
          alt={"mongo_logo"}
        />
        <Image
          source={"./assets/img/nodejs_logo.png"}
          height={100}
          maxHeight={70}
          padding={"10px 20px"}
          alt={"nodejs_logo"}
        />

      </div>
    );
  }
}
