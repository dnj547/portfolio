import React, { Component } from 'react';

class AboutContainer extends Component {

  render() {
    return (
      <div className="about-container">
        <div className="about-me-pic">
          <img
            alt="me"
            src="images/me.jpg"
            />
        </div>
        <div className="about-me">
          <h1>About Me</h1>
          <h2>Hi, I'm Danielle.</h2>
          <p>I'm a full-stack software developer who just graduated from Flatiron School! (July 2019)</p>

        </div>
      </div>
    );
  }
}

export default AboutContainer;
