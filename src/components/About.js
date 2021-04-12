import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import mylogo from "./img/my-logo.png";
import Resume from "./Resume.js";
import AboutDescription from "./AboutDescription.js";
import "../App.css";

class About extends Component {
  state = {
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
                <Link to="/">Home</Link>
              </div>
              <div className="about">
                <Link to="/about" className="active">
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className="title">Anabelle Castro</div>
          <div className="speciality">Designer | Developer</div>
        </section>
        <div className="projects-body">
          <AboutDescription
            title="Hi, I'm Anabelle."
            summary="I'm a digital creative based near Portland, OR. I am a graduate of Washington State University Vancouver with a Bachelor of Arts in Digital Technology &amp; Culture and a minor in English. My goal is to create and develop clever, user-friendly designs and produce engaging content."
          />
          <Resume />
        </div>
      </div>
    );
  }
}

export default About;
