import React, { Component } from 'react';

class Project extends Component {

  showProject = () => {
    if (this.props.project.id === this.props.currentProject) {
      return (
        <div className="project">
          <div className="video-container">
            <iframe title={this.props.project.id} width="840" height="472.50" src={this.props.project.video} frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="project-info">
            <h1>{this.props.project.name}</h1>
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

  render() {
    console.log('Project props', this.props);
    return (
      <div>
        {this.showProject()}
      </div>
    )
  }
}

export default Project;
