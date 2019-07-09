import React, { Component } from 'react';
import PieChartWithCustomization from './Chart';

// const API_CARDS = 'http://localhost:3000/api/v1/cards';
const API_VOTES = 'http://localhost:3000/api/v1/votes';
const API_RESPONSES = 'http://localhost:3000/api/v1/responses';

class Card extends Component {

  state = {
    clicked: [],
    responsesAndVotePercentages: []
  }

  showResponsesAndVotePercentages = () => {
    return this.state.responsesAndVotePercentages.map(rv=>{
      if (rv[0] === this.state.clicked) {
        return <p key={rv[0]}><strong>{rv[0]}: {rv[1]}</strong></p>
      } else {
        return <p key={rv[0]}>{rv[0]}: {rv[1]}</p>
      }
    })
  }

  resetState = () => {
    this.setState({
      clicked: [],
      responsesAndVotePercentages: []
    }, this.props.nextCardOrRestart())
  }

  showTextOrImageOrAnalytics = () => {
    if (this.state.clicked.length>0) {
      return (
        <div className="card">
          <div className="level-text">
            <p><strong>You said: {this.state.clicked}</strong></p>
            <p>Other people said: </p>
            <div className="analytics">
              {this.state.clicked.length > 0 ?  <PieChartWithCustomization pieState={this.state}/> : null}
            </div>
          </div>
          <br/>
          <button onClick={this.resetState} className="response-button">Cool</button>
        </div>
      )
    } else if (this.props.card.text) {
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

  fetchVotes = (responseClicked, cardClickedId) => {
    fetch(API_RESPONSES)
    .then(r=>r.json())
    .then(responses=>{
      let responsesForThisCard = responses.filter(response=>{
        return response.card_id === cardClickedId
      })
      let totalVotes = responsesForThisCard.map(response=>{
        return response.votes.length
      }).reduce((a,b) => a + b, 0)
      let responsesAndVotePercentages = []
      responsesForThisCard.map(response=>{
        return responsesAndVotePercentages.push([response.response_text, ((response.votes.length/totalVotes)*100).toFixed(0)+'%'])
      })
      let clicked = responseClicked.text
      this.setState({
        clicked: clicked,
        responsesAndVotePercentages: responsesAndVotePercentages
      })
    })
    .catch(()=>console.log("Error fetching votes"))
  }

  postToVotes = (e) => {
    console.log('');
    console.log('posting to votes');
    let cardClickedId = this.props.card.id
    let responseClicked = this.props.card.responses.find(response=>{
      return response.id === parseInt(e.currentTarget.id, 10)
    })
    let responseClickedId = responseClicked.id
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
    .then(vote=>{
      console.log('vote posted', vote);
      this.fetchVotes(responseClicked, cardClickedId)
    })
  }

  render() {
    console.log('Card props', this.props);
    return (
      <div className="level">
        <h2>{this.props.level}</h2>
        {this.showTextOrImageOrAnalytics()}
      </div>
    )
  }
}

export default Card;
