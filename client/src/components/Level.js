import React, { Component } from 'react';

class Level extends Component {
  state = {
    progress: 0
  }
  nextCardOrRestart = () => {
    // if progress is less than the number of cards, increase progress by 1
    // if you have reached the end of the cards, reset the progress
    if (this.state.progress < this.props.level.cards.length-1) {
      this.setState({
        progress: this.state.progress + 1
      })
    } else {
      this.setState({
        progress: 0
      })
    }
  }
  showCard = () => {
    if (this.props.level.cards) {
      return <div>{this.props.level.cards[this.state.progress].text}</div>
    }
  }
  showButtons = () => {
    if (this.props.level.cards) {
      return this.props.level.cards[this.state.progress].responses.map(response=>{
        return <button key={response.id} onClick={this.nextCardOrRestart}>{response.text}</button>
      })
    }
  }
  render() {
    console.log(this.props.level);
    console.log(this.state);
    return (
      <div className="level ui container">
        {this.props.level.name}
        {this.showCard()}
        {this.showButtons()}
      </div>
    );
  }
}

export default Level;
