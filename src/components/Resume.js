import React, { Component } from "react";
import "../App.css";
import Pdf from "./img/castro-resume.pdf";

class Resume extends Component {
  render() {
    return (
      <div className="resume-button">
        <a href={Pdf} target="_blank">
          Resume
        </a>
      </div>
    );
  }
}

export default Resume;
