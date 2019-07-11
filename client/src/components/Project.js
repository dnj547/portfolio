import React, { Component } from 'react';

class Project extends Component {
  state = {
    width: (window.innerWidth/2).toString(),
    height: ((window.innerWidth/2)*(472.5/840)).toString()
  }

  render() {
    console.log('Project props', this.props);
    return (
      <div className="project">
        <h1>{this.props.project.name}</h1>
        <div className="project-stuff">
          <div className="video-container">
            <iframe title={this.props.project.id} width={this.state.width} height={this.state.height} src={this.props.project.video} frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="project-info">
            <a href={this.props.project.github}>GitHub</a><br/>
            <h3>Created</h3><br/>
            <p>{this.props.project['date-created']}</p><br/>
            <h3>Tech Used</h3><br/>
            <p>{this.props.project['tech-used']}</p><br/>
            <h3>Description</h3><br/>
            <p>{this.props.project.description}</p><br/>
            <button onClick={this.props.previousProject}>Previous</button>
            <button onClick={this.props.nextProject}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
