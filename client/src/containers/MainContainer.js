import React, { Component } from 'react';
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import LifeContainer from './LifeContainer';
import ContactContainer from './ContactContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
          <Router>
            <div className="nav-bar">
              <div className="nav-links">
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/life">Life</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </div>
              <h1 className="my-name">Danielle Jasper</h1>
            </div>
            <Route path="/" exact component={AboutContainer} />
            <Route path="/projects" exact component={ProjectsContainer} />
            <Route path="/life" exact component={LifeContainer} />
            <Route path="/contact" exact component={ContactContainer} />
          </Router>
      </div>
    );
  }
}

export default MainContainer;
