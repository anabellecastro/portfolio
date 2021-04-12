import React, { Component } from "react";
import Header from "./Header.js";
import "../App.css";
import Images from "./Images.js";

import dailyone from "./img/001.png";
import dailytwo from "./img/002.png";
import dailythree from "./img/003.png";
import dailyfour from "./img/004.png";
import dailyfive from "./img/005.png";
import dailysix from "./img/006.png";
import dailyseven from "./img/007.png";
import dailyeight from "./img/008.png";

class DailyUI extends Component {
  state = {
    dailyOneImage: dailyone,
    dailyTwoImage: dailytwo,
    dailyThreeImage: dailythree,
    dailyFourImage: dailyfour,
    dailyFiveImage: dailyfive,
    dailySixImage: dailysix,
    dailySevenImage: dailyseven,
    dailyEightImage: dailyeight,
  };

  render() {
    return (
      <div>
        <div className="daily-header">
          <Header />
          <div className="title">100 Days of UI</div>
          <div className="speciality">UI Design</div>
        </div>
        <div className="projects-body">
          <Images
            image={this.state.dailyEightImage}
            title="DailyUI 008"
            category="404 Page"
          />
          <Images
            image={this.state.dailySevenImage}
            title="DailyUI 007"
            category="Settings"
          />
          <Images
            image={this.state.dailySixImage}
            title="DailyUI 006"
            category="User Profile"
          />
          <Images
            image={this.state.dailyFiveImage}
            title="DailyUI 005"
            category="App Icon"
          />
          <Images
            image={this.state.dailyFourImage}
            title="DailyUI 004"
            category="Calculator"
          />
          <Images
            image={this.state.dailyThreeImage}
            title="DailyUI 003"
            category="Landing Page"
          />
          <Images
            image={this.state.dailyTwoImage}
            title="DailyUI 002"
            category="Credit Card Checkout"
          />
          <Images
            image={this.state.dailyOneImage}
            title="DailyUI 001"
            category="Sign Up"
          />
        </div>
      </div>
    );
  }
}

export default DailyUI;
