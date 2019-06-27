import React, { Component } from 'react';

const API = 'http://localhost:3000/api/v1/votes'

class Level extends Component {

  state = {
    progress: 0,
    votes: []
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

  showCard = () => {
    // if (this.props.currentLevel >= this.props.level.id) {
      if (this.props.level.cards) {
        if (this.props.level.cards[this.state.progress].text) {
          return (
            <div className="level">
              <h2>{this.props.level.id}</h2>
              <div className="card">
                <div className="level-text">
                  {this.props.level.cards[this.state.progress].text}
                </div>
                <br/>
                {this.showButtons()}
              </div>
            </div>
          )
        } else {
          return (
            <div className="level">
              <h2>{this.props.level.id}</h2>
              <div className="card">
                <div className="img-container">
                  <img
                    alt={this.props.level.cards[this.state.progress].id}
                    src={this.props.level.cards[this.state.progress].image}/>
                </div>
                <br/>
                {this.showButtons()}
              </div>
            </div>
          )
        }
      }
    // }
  }

  showButtons = () => {
    if (this.props.currentLevel >= this.props.level.id) {
      if (this.props.level.cards) {
        return this.props.level.cards[this.state.progress].responses.map(response=>{
          return <button id={response.id} key={response.id} onClick={this.nextCardOrRestart}>{response.text}</button>
        })
      }
    }
  }

  componentDidMount() {
    console.log('component did mount');
    this.fetchVotes()
  }

  fetchVotes = () => {
    console.log('fetching votes');
    fetch(API)
    .then(r=>r.json())
    .then(votes=>{
      // find votes where card id is within the card IDs of this level
      let thisLevelCardIds = this.props.level.cards.map(card=>{
        return card.id
      })
      console.log('');
      console.log('this level card IDs', thisLevelCardIds);
      let votesForThisLevel = votes.filter(vote=>{
        return thisLevelCardIds.includes(vote.card.id)
      })
      console.log('votes for this level', votesForThisLevel);
      this.setState({
        votes: votesForThisLevel
      }, this.analytics(votesForThisLevel))
    })
    .catch(()=>console.log("Error fetching votes"))
  }

  postToVotes = (e) => {
    // I need game_data card ids and response ids to match api card ids and response ids
    if (this.props.level.cards[this.state.progress].responses.length > 1) {
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('posting to votes');
      let cardClicked = this.props.level.cards[this.state.progress]
      let cardClickedId = cardClicked.id
      let responseClickedId = cardClicked.responses.find(response=>{
        return response.id === parseInt(e.currentTarget.id, 10)
      }).id
      fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "response_id": responseClickedId,
          "card_id": cardClickedId
        })
      })
      .then(r=>r.json())
      .then(data=>this.setState({
        progress: this.state.progress
      }, this.fetchVotes()))
    } else {
      console.log('nothing to post');
    }
  }

  analytics = (votesForThisLevel) => {
    console.log('analytics');
    let responses = this.props.level.cards.map(card=>{
      return card.responses
    })
    console.log(responses);
  }

  render() {
    console.log('');
    console.log(this.props.level.name, this.state, 'props', this.props);
    return (
      <div className="level ui container">
        {this.showCard()}
      </div>
    );
  }
}

export default Level;
