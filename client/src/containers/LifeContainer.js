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

  montage = () => {
    console.log('montage');
  }

  showInitialPage = () => {
    if (this.state.level === 0) {
      return (
        <div className="initial-life-page">
          <div className="initial-life-page-card">
            <img
              alt="me"
              src="images/me.jpg"
              />
            <button className="play-game-button" onClick={this.nextLevel}>Play</button>
          </div>
          <div className="initial-life-page-text">
            <h1>Play the game of my life!</h1>
            <p>click play to start the game</p>
            <button onClick={this.montage}>Montage</button>
          </div>
        </div>
      )
    }
  }

  finishIt = () => {
    this.setState({
      level: 4
    })
  }

  render() {
    console.log('Life Container state', this.state);
    return (
      <div>
        <div className="life-container">
          {this.showInitialPage()}
          {this.levelComponents()}
        </div>
        <div onClick={this.finishIt}>...</div>
      </div>
    );
  }
}

export default LifeContainer;
