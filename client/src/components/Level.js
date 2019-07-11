import React, { Component } from 'react';
import Card from './Card';

class Level extends Component {

  state = {
    progress: 0,
    votes: []
  }

  showACardComponent = () => {
    debugger
    if (!!this.props.montage) {
      let currentCard = this.props.level.cards[this.state.progress]
      return (
        <div className="card-and-button-div">
          <Card
            montage={this.props.montage}
            card={currentCard}
            nextCardOrRestart={this.nextCardOrRestart}
            level={this.props.level.id}
            nextLevel={this.props.nextLevel}
            currentLevel={this.props.currentLevel}/>
          <div onClick={this.finishIt}>...</div>
        </div>
      )
    } else if (this.props.level.cards && this.props.currentLevel >= this.props.level.id) {
      let currentCard = this.props.level.cards[this.state.progress]
      return (
        <div className="card-and-button-div">
          <Card
            card={currentCard}
            nextCardOrRestart={this.nextCardOrRestart}
            level={this.props.level.id}/>
          <div onClick={this.finishIt}>...</div>
        </div>
      )
    }
  }

  nextCardOrRestart = (e) => {
    // if progress is less than the number of cards, increase progress by 1
    // if you have reached the end of the cards, reset the progress
    if (this.state.progress < this.props.level.cards.length-2) {
      this.setState({
        progress: this.state.progress + 1
      })
    } else if (this.state.progress < this.props.level.cards.length-1){
      this.setState({
        progress: this.state.progress + 1
      }, this.props.nextLevel())
    } else {
      this.setState({
        progress: 0
      })
    }
  }

  finishIt = () => {
    this.setState({
      progress: this.props.level.cards.length-1
    })
  }

  render() {
    console.log('level props', this.props);
    console.log('level state', this.state);
    // console.log('');
    // console.log(this.props.level.name, this.state, 'props', this.props);
    return (
      <div className="card-and-button-div-container">
        {this.showACardComponent()}
      </div>
    );
  }
}

export default Level;
