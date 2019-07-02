import React, { Component } from 'react';

const API_CARDS = 'http://localhost:3000/api/v1/cards';
const API_VOTES = 'http://localhost:3000/api/v1/votes'

class Card extends Component {

  showTextOrImage = () => {
    if (this.props.card.text) {
      return (
        <div className="card">
          <div className="level-text">
            <p>{this.props.card.text}</p>
          </div>
          <br/>
          {this.showButtons()}
        </div>
      )
    } else {
      return (
        <div className="card">
          <div className="img-container">
            <img
              alt={this.props.card.id}
              src={this.props.card.image}/>
          </div>
          <br/>
          {this.showButtons()}
        </div>
      )
    }
  }

  showButtons = () => {
    return this.props.card.responses.map(response=>{
      return (
        <button className="response-button" id={response.id} key={response.id} onClick={this.props.card.responses.length > 1 ? this.postToVotes : this.props.nextCardOrRestart}>{response.text}</button>
      )
    })
  }

  fetchVotes = () => {
    // debugger
    let cardClickedId = this.props.card.id
    console.log('fetching votes for card ID', cardClickedId);
    fetch(API_CARDS + '/' + cardClickedId)
    .then(r=>r.json())
    .then(cardClicked=>{
      console.log('card Clicked', cardClicked);
      // find votes where card id is within the card IDs of this level
      // let thisLevelCardIds = this.props.level.cards.map(card=>{
      //   return card.id
      // })
      // console.log('');
      // console.log('this level card IDs', thisLevelCardIds);
      // let votesForThisLevel = votes.filter(vote=>{
      //   return thisLevelCardIds.includes(vote.card.id)
      // })
      // console.log('votes for this level', votesForThisLevel);
      // this.setState({
      //   votes: votesForThisLevel
      // }, this.analytics(votesForThisLevel))
    })
    .catch(()=>console.log("Error fetching votes"))
  }

  postToVotes = (e) => {
    // I need game_data card ids and response ids to match api card ids and response ids
    if (this.props.card.responses.length > 1) {
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('posting to votes');
      let cardClickedId = this.props.card.id
      console.log('cardClickedId', cardClickedId);
      let responseClickedId = this.props.card.responses.find(response=>{
        return response.id === parseInt(e.currentTarget.id, 10)
      }).id
      fetch(API_VOTES, {
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
      }))
      .then(nada=>{
        this.fetchVotes()
      })
    } else {
      console.log('nothing to post');
    }
  }

  analytics = () => {
    console.log('analytics');
    let responses = this.props.card.responses
    console.log('responses', responses);
  }

  render() {
    console.log('Card props', this.props);
    return (
      <div className="level">
        <h2>{this.props.level}</h2>
        {this.showTextOrImage()}
      </div>
    )
  }
}

export default Card;
