import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import "../App.css";
import ProjectImages from "./ProjectImages.js";
import cchmscreen from "./img/cchm.png";
import iconone from "./img/icon-1.png";
import icontwo from "./img/icon-2.png";
import iconthree from "./img/icon-3.png";

class Renovare extends Component {
  state = {
    cchmScreen: cchmscreen,
    iconOne: iconone,
    iconTwo: icontwo,
    iconThree: iconthree,
  };

  render() {
    return (
      <div className="renovare-body">
        <Header />
        <div className="title">Project Renovare</div>
        <div className="speciality">Redesign | Development</div>
        <div className="projects-body">
          <ProjectImages
            image={this.state.cchmScreen}
            title="Project Renovare"
            summary="The Project Renovare team re-created the website for the Clark County Historical Museum (CCHM). The CCHM mission statement of gather, save, share really inspired the team to highlight the value CCHM brings to the Clark County community."
          />
          <div className="renovare-card">
            <div className="card-title card-one">
              <h1>The Challenge</h1>
            </div>
            <div className="card-body">
              <p>
                Having a strong, functioning website is essential for any
                business. The design of the Clark County Historical Museums
                website must relay information about their business while
                telling the story of its history and unique character.
              </p>
            </div>
          </div>
          <div className="renovare-card">
            <div className="card-title card-two">
              <h1>My Role</h1>
            </div>
            <div className="card-body">
              <p>
                <span style={{ fontWeight: "600" }}>
                  UX/UI Designer | Developer
                </span>
                <ul>
                  <li>
                    <img src={this.state.iconOne} className="icons" />
                    Created wireframes and prototypes in Adobe XD and Photoshop
                    using the rebranding design specifications.
                  </li>
                  <li>
                    <img src={this.state.iconTwo} className="icons" />
                    Implemented prototype designs using GitHub and WordPress.
                  </li>
                  <li>
                    <img src={this.state.iconThree} className="icons" />
                    Conducted usability testing and collected data to enhance
                    the user experience.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="renovare-card">
            <div className="card-title card-three">
              <h1>The Website</h1>
            </div>
            <div className="card-body">
              <p>
                View the fully redesigned website here:
                <br />
                <br />
                <Link
                  to="http://dtc-wsuv.org/projects/cchm"
                  style={{
                    textDecoration: "underline 4px #f8c245",
                    color: "#000000",
                    fontWeight: "600",
                  }}
                >
                  CCHM
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Renovare;
