import React, { Component } from 'react';

class AboutContainer extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-container-stuff">
          <div className="about-me-card">
            <img alt="me" src="images/me.jpg"/><br/><br/>
            <a href="https://github.com/dnj547">
              <button className="about-me-button">GitHub</button>
            </a>
            <a href="https://medium.com/@devdanielle">
              <button className="about-me-button">Medium</button>
            </a>
            <a href="https://www.linkedin.com/in/daniellejasper/">
              <button className="about-me-button">LinkedIn</button>
            </a>
            <a href="https://docs.google.com/presentation/d/1LaTpyhd_-QaJcM2NbAiQJMTuIldh-axyvpzFLnIlpmc/edit?usp=sharing">
              <button className="about-me-button">Resumé</button>
            </a>
          </div>
          <div className="about-me-text">
            <h1>About Me</h1><br/>
            <p>Hi, I'm Danielle. I'm a full-stack software developer who just graduated from Flatiron School in NYC!</p>
            <h2></h2>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
