import React, { Component } from "react";
import "../App.css";
import dribbble from "./img/dribbble.png";
import github from "./img/github.png";
import linkedin from "./img/linkedin.png";
import ButtonMailto from "./ButtonMailto.js";

class Footer extends Component {
  state = {
    github: github,
    dribbble: dribbble,
    linkedin: linkedin,
  };

  render() {
    return (
      <div className="footer">
        <div className="footer-title">Let's work together!</div>
        <div className="footer-statement">
          <p>
            If you have a project that can use my help, or if you just want to
            say hello, I would love to hear from you.
          </p>
        </div>
        <div className="message-contain">
          <ButtonMailto mailto="mailto:anabellehcastro@outlook.com" />
        </div>
        <div className="social-links">
          <div className="social">
            <a href="https://dribbble.com/anabellecastro" target="_blank">
              <img
                className="dribbble"
                src={this.state.dribbble}
                alt="Dribbble Logo"
              />
            </a>
          </div>
          <div className="social">
            <a href="https://github.com/anabellecastro" target="_blank">
              <img
                className="github"
                src={this.state.github}
                alt="Github Logo"
              />
            </a>
          </div>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/anabellehcastro/"
              target="_blank"
            >
              <img
                className="linkedin"
                src={this.state.linkedin}
                alt="LinkedIn Logo"
              />
            </a>
          </div>
        </div>
        <div className="footer-copyright">© 2021 Anabelle Castro</div>
      </div>
    );
  }
}

export default Footer;
