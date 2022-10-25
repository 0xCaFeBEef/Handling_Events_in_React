import React, { Component } from "react";
import "./CopyDemo.css";
class CopyDemo extends Component {
  handleCopy(e) {
    e.preventDefault();
    alert("Sorry, that's not allowed here");
  }

  render() {
    return (
      <div>
        <h3>Copy this</h3>
        <section className="CopyDemo" onCopy={this.handleCopy}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eius,
          quas reiciendis provident ipsum, accusantium accusamus quibusdam ipsam
          doloremque corporis ea labore beatae ad delectus quasi ipsa corrupti
          recusandae quam!
        </section>
      </div>
    );
  }
}

export default CopyDemo;
