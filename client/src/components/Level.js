import React, { Component } from 'react';

const API = 'http://localhost:3000/api/v1/votes'

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

  fetchVotes = () => {
    console.log('fetching votes');
    fetch(API)
    .then(r=>r.json())
    .then(votes=>{
      console.log(votes);
    })
    .catch(()=>console.log("Error"))
  }

  postToVotes = () => {
    console.log('posting to votes');
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
      	"response_id": 1,
      	"card_id": 1
      })
    })
    .then(r=>r.json())
    .then(data=>console.log('done'))
  }

  render() {
    console.log(this.props.level);
    console.log(this.state);
    return (
      <div className="level ui container">
        {this.props.level.name}
        {this.showCard()}
        {this.showButtons()}
        {this.fetchVotes()}
        <button onClick={this.postToVotes}>Post</button>
      </div>
    );
  }
}

export default Level;
