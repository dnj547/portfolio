import React, { Component } from 'react';
import Level from '../components/Level';
import data from '../data/game_data.json';

class LifeContainer extends Component {

  state = {
    level: 1
  }

  levelComponents = () => {
    return data.map(level=>{
      return <Level key={level.id} level={level} nextLevel={this.nextLevel} currentLevel={this.state.level}/>
    })
  }

  nextLevel = () => {
    if (this.state.level <= 4) {
      this.setState({
        level: this.state.level + 1
      })
    } else {
      console.log("game over");
    }
  }

  render() {
    console.log('Life Container state', this.state);
    return (
      <div className="life-container">
        {this.levelComponents()}
      </div>
    );
  }
}

export default LifeContainer;
