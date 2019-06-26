import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div className="project ui container">
        {this.props.project.name}
      </div>
    );
  }
}

export default Project;
