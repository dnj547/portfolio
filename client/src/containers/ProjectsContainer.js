import React, { Component } from 'react';
import data from '../data/project_data.json';
import Project from '../components/Project';

class ProjectsContainer extends Component {

  state = {
    currentProject: 1
  }

  nextProject = () => {
    if (this.state.currentProject < data.length) {
      this.setState({
        currentProject: this.state.currentProject+1
      })
    }
  }

  previousProject = () => {
    if (this.state.currentProject > 1) {
      this.setState({
        currentProject: this.state.currentProject-1
      })
    }
  }

  projectComponents = () => {
    return data.map(project=>{
      return <Project key={project.id} project={project} currentProject={this.state.currentProject} nextProject={this.nextProject} previousProject={this.previousProject}/>
    })
  }
  render() {
    return (
      <div className="projects-container ui container">
        {this.projectComponents()}
      </div>
    );
  }
}

export default ProjectsContainer;
