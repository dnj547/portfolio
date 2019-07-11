import React, { Component } from 'react';

class AboutContainer extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-me-card">
          <img alt="me" src="images/me.jpg"/>
        </div>
        <div className="about-me-text">
          <h1>About Me</h1>
          <h2>Hi, I'm Danielle.</h2>
          <p>I'm a full-stack software developer who just graduated from Flatiron School! (July 2019)</p>
          <h3>Links:</h3>
          <a href="https://github.com/dnj547">GitHub</a> | <a href="https://medium.com/@devdanielle">Medium</a> | <a href="https://www.linkedin.com/in/daniellejasper/">LinkedIn</a>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
