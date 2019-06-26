import React, { Component } from 'react';
import Level from '../components/Level';
import data from '../data/game_data.json';

class LifeContainer extends Component {
  levelComponents = () => {
    return data.map(level=>{
      return <Level key={level.id} level={level} />
    })
  }
  render() {
    return (
      <div className="life-container ui container">
        Life Container
        {this.levelComponents()}
      </div>
    );
  }
}

export default LifeContainer;
