import React, { Component } from "react";
import "./WiseSquare.css";

class WiseSquare extends Component {
  dispenseWisdom() {
    let messages = [
      "Never release your water when facing wind",
      "Forget not your scrolls when entering porcelan portals"
    ];
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  }

  render() {
    return (
      <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>
        &#128512;
      </div>
    );
  }
}
export default WiseSquare;
