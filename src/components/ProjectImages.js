import React from "react";
import "../App.css";

function ProjectImages(props) {
  return (
    <div className="project-page">
      <div className="project-page-image">
        <img src={props.image} alt="Project Image" />
      </div>
      <div className="project-page-title">{props.title}</div>
      <div className="project-page-summary">{props.summary}</div>
      <div className="project-accent"></div>
    </div>
  );
}

export default ProjectImages;
