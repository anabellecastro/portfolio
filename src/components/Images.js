import React from 'react';
import '../App.css';
 
function Images(props) {
  return (
    <div className="columns">
    <div className="column-container">
      <div className="column-container-left">
        <img src={props.image} alt="100 Days of UI Image"/>
      </div>
      <div className="column-container-right">
      <div className="challenge-title">{props.title}</div>
        <div className="challenge-category">{props.category}</div>
      </div>
    </div>
  </div>
  )
}
 
export default Images;