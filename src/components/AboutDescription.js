import React from "react";
import "../App.css";

function AboutDescription(props) {
  return (
    <div className="project-page">
      <div className="project-page-title">{props.title}</div>
      <div className="project-page-summary">{props.summary}</div>
      <div className="about-accent"></div>
    </div>
  );
}

export default AboutDescription;
