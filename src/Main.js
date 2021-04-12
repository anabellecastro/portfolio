import React, { Component } from "react";
import Thumbnail from "./components/Thumbnail.js";
import "./App.css";
import { Link } from "react-router-dom";

import projectone from "./components/img/project-one.png";
import projecttwo from "./components/img/project-two.png";
import projectthree from "./components/img/project-three.png";
import mylogo from "./components/img/my-logo.png";

class Main extends Component {
  state = {
    projectOneImage: projectone,
    projectTwoImage: projecttwo,
    projectThreeImage: projectthree,
    myLogo: mylogo,
  };

  render() {
    return (
      <div>
        <section className="header">
          <div className="navigation">
            <div className="name">
              <Link to="/" className="active">
                <img src={this.state.myLogo} />
              </Link>
            </div>
            <div className="navigation-sub">
              <div className="work">
                <Link to="/" className="active">
                  Home
                </Link>
              </div>
              <div className="about">
                <Link to="/about">About</Link>
              </div>
            </div>
          </div>
          <div className="title">Anabelle Castro</div>
          <div className="speciality">Designer | Developer</div>
        </section>
        <div className="projects-body">
          <Thumbnail
            link="/renovare"
            image={this.state.projectOneImage}
            title="Project Renovare"
            category="Redesign | Development"
          />

          <Thumbnail
            link="/dailyui"
            image={this.state.projectTwoImage}
            title="100 Days of UI"
            category="UI Design"
          />

          <Thumbnail
            link="/illustrations"
            image={this.state.projectThreeImage}
            title="Illustrations and Designs"
            category="Multimedia"
          />
        </div>
      </div>
    );
  }
}

export default Main;
