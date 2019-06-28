import React, { Component } from 'react';
// import ReactPlayer from 'react-player'

class Project extends Component {

  showProject = () => {
    if (this.props.project.id === this.props.currentProject) {
      return (
        <div className="project">
          <iframe className="project-video" title={this.props.project.name} width="1120" height="630" src={`https://www.youtube.com/embed/${this.props.project.video}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
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

// <ReactPlayer className="project-video" url={this.props.project.video} width="900px" height="506.25px"/>
