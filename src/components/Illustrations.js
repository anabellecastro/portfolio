import React, { Component } from "react";
import Header from "./Header.js";
import "../App.css";

import imageOne from "./img/img-1.png";
import imageTwo from "./img/img-2.png";
import imageThree from "./img/img-3.png";
import imageFour from "./img/img-4.png";
import imageFive from "./img/img-5.png";
import imageSix from "./img/img-6.png";

class Illustrations extends Component {
  state = {
    imageOne: imageOne,
    imageTwo: imageTwo,
    imageThree: imageThree,
    imageFour: imageFour,
    imageFive: imageFive,
    imageSix: imageSix,
  };

  render() {
    return (
      <div className="illustrations-body">
        <div className="illustration-header">
          <Header />
          <div className="title">Illustrations and Designs</div>
          <div className="speciality">Multimedia</div>
        </div>
        <div className="columns">
          <div className="column-container">
            <div className="column-container-left">
              <img src={this.state.imageTwo} alt="Image" />
            </div>
            <div className="column-container-right">
              <img src={this.state.imageOne} alt="Image" />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column-container">
            <div className="column-container-left">
              <img src={this.state.imageThree} alt="Image" />
            </div>
            <div className="column-container-right">
              <img src={this.state.imageFour} alt="Image" />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column-container">
            <div className="column-container-left">
              <img src={this.state.imageFive} alt="Image" />
            </div>
            <div className="column-container-right">
              <img src={this.state.imageSix} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Illustrations;
