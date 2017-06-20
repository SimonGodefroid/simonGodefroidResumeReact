import React, { Component } from "react";
import { css } from "glamor";
import Image from "./Image";
import ExpItem from "./ExpItem";

let tabContent = css({
  height: "150px",
  "@media(max-width: 698px)": {
    height: "100vh",
    textAlign: "left",
    padding: "10px",
    lineheight: "220px"
  }
});

class Experience extends Component {
  renderRoles(roles) {
    if (roles.length) {
      let rolesBuild = roles.map((role, index) => {
        return (
          <ExpItem
            key={index}
            date={role.date}
            title={role.title}
            missions={role.missions}
          />
        );
      });
      return rolesBuild;
    }
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <Image
            source={this.props.logo}
            height={70}
            maxHeight={70}
            padding={"10px 20px"}
            verticalAlign="middle"
            alt={this.props.logoAlt}
          />
          <h2>{this.props.employer}</h2>
        </div>
        <div {...tabContent}>
          <ul>
            {this.renderRoles(this.props.roles)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Experience;
