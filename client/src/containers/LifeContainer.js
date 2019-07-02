import React, { Component } from 'react';
import Level from '../components/Level';
import data from '../data/game_data.json';

class LifeContainer extends Component {

  state = {
    level: 0
  }

  levelComponents = () => {
    if (this.state.level > 0) {
      return data.map(level=>{
        return <Level key={level.id} level={level} nextLevel={this.nextLevel} currentLevel={this.state.level}/>
      })
    }
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

  showInitialPage = () => {
    if (this.state.level === 0) {
      return (
        <div className="initial-life-page">
          <h1>Play the game of my life!</h1>
          <button onClick={this.nextLevel}>Play</button>
        </div>
      )
    }
  }

  render() {
    console.log('Life Container state', this.state);
    return (
      <div className="life-container">
        {this.showInitialPage()}
        {this.levelComponents()}
      </div>
    );
  }
}

export default LifeContainer;
