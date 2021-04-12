import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ButtonMailto = ({ mailto }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      <div className="message-me">
        <p>Message Me</p>
      </div>
    </Link>
  );
};

export default ButtonMailto;
