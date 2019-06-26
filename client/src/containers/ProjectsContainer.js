import React, { Component } from 'react';
import data from '../data/project_data.json';
import Project from '../components/Project';

class ProjectsContainer extends Component {
  projectComponents = () => {
    return data.map(project=>{
      return <Project key={project.id} project={project} />
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
