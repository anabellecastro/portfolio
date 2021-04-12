import React from "react";
import "../App.css";

function Cards(props) {
  return (
    <div className="columns">
      <div className="column-container">
        <div className="column-container-left">
          <img src={props.image} alt="Image" />
        </div>
        <div className="column-container-right">
          <img src={props.image} alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
