import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import mylogo from "./img/my-logo.png";

class Header extends Component {
  state = {
    myLogo: mylogo,
  };

  render() {
    return (
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
              <Link to="/about" className="active">
                About
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
