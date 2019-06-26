import React, { Component } from 'react';
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import LifeContainer from './LifeContainer';
import ContactContainer from './ContactContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class MainContainer extends Component {
  render() {
    return (
      <div className="main-container ui container">
        Main Container
        <h1 className="ui header">Danielle Jasper</h1>

          <Router>
            <div className="nav-bar ui container">
              Nav Bar
              <br/>
              <Link to="/">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/life">Life</Link>
              <Link to="/contact">Contact</Link>
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
