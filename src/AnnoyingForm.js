import React, { Component } from "react";

class AnnoyingForm extends Component {
  handleKeyUp(e) {
    //console.log(e);
    e.keyCode === 71 && alert("YOU SHALL NOT PASS!"); // 71==g
  }
  render() {
    return (
      <div>
        <h3>Try typing In Here:</h3>
        <textarea onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
}

export default AnnoyingForm;
