import React, { Component } from 'react';
import Card from './Card';



class Level extends Component {

  state = {
    progress: 0,
    votes: []
  }

  showACardComponent = () => {
    if (this.props.level.cards) {
      let currentCard = this.props.level.cards[this.state.progress]
        return <Card card={currentCard} nextCardOrRestart={this.nextCardOrRestart} level={this.props.level.id}/>
    }
  }

  nextCardOrRestart = (e) => {
    // if progress is less than the number of cards, increase progress by 1
    // if you have reached the end of the cards, reset the progress
    if (this.state.progress < this.props.level.cards.length-2) {
      this.setState({
        progress: this.state.progress + 1
      }, this.postToVotes(e), this.fetchVotes())
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


  render() {
    console.log('');
    console.log(this.props.level.name, this.state, 'props', this.props);
    return (
      <div className="level">
        {this.showACardComponent()}
      </div>
    );
  }
}

export default Level;
