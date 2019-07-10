import React, { Component } from 'react';

class Project extends Component {
  render() {
    console.log('Project props', this.props);
    return (
      <div className="project">
        <div className="video-container">
          <iframe title={this.props.project.id} width="840" height="472.50" src={this.props.project.video} frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="project-info">
          <h1>{this.props.project.name}</h1>
          <a href={this.props.project.github}>GitHub</a>
          <p>
            <strong>Created: </strong>
            {this.props.project['date-created']}
          </p>
          <p>
            <strong>Tech Used: </strong>
            {this.props.project['tech-used']}
          </p>
          <p>
            <strong>Description: </strong>
            {this.props.project.description}
          </p>
          <button onClick={this.props.previousProject}>Previous</button>
          <button onClick={this.props.nextProject}>Next</button>
        </div>
      </div>
    )
  }
}

export default Project;
