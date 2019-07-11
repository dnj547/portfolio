import React, { Component } from 'react';
import PieChartWithCustomization from './Chart';

// const API_CARDS = 'http://localhost:3000/api/v1/cards';
const API_VOTES = 'http://localhost:3000/api/v1/votes';
const API_RESPONSES = 'http://localhost:3000/api/v1/responses';

class Card extends Component {

  state = {
    clicked: [],
    responsesAndVotePercentages: [],
    highestResponse: [],
    correctAnswer: {}
  }

  resetState = () => {
    this.setState({
      clicked: [],
      responsesAndVotePercentages: [],
      highestResponse: [],
      correctAnswer: {}
    }, this.props.nextCardOrRestart())
  }

  rightWrongOrNothing = () => {
    if (this.state.clicked && this.state.correctAnswer) {
      if (this.state.clicked === this.state.correctAnswer.response_text) {
        return (<p>You got it!</p>)
      } else {
        return (<p>Wrong answer!</p>)
      }
    } else {
      return null
    }
  }

  showCard = () => {
    if (this.state.clicked.length>0) {
      return (
        <div className="card">
          <div className="card-analytics-container">
            {this.rightWrongOrNothing()}
            <p>The question was...</p>
            <p className="card-analytics-text">{this.props.card.text}</p>
            <div className="correct-answer">
              <p>Correct Answer:</p><br/>
              <button disabled>{this.state.correctAnswer['response_text']}</button>
            </div>

            <p className="card-survey-says">Survey says:</p>
            <div className="survey-says">
              <p className="survey-says-text">{this.state.highestResponse[1]}</p>
              <button className="survey-says-button" disabled>{this.state.highestResponse[0]}</button>
            </div>
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
          <div className="card-text-container">
            <p>{this.props.card.text}</p>
          </div>
          <br/>
          {this.showButtons()}
        </div>
      )
    } else {
      return (
        <div className="card">
          <div className="card-img-container">
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
        <div className="response-button-container" key={response.id}>
          <button className="response-button" id={response.id} key={response.id} onClick={this.props.card.responses.length > 1 ? this.postToVotes : this.props.nextCardOrRestart}>{response.text}</button>
        </div>
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
      let responsesSorted = responsesForThisCard.sort(function(a, b){return a.votes.length - b.votes.length})
      console.log(responsesSorted);
      let highestOne = responsesSorted[responsesSorted.length-1]
      let highest = []
      highest.push(highestOne['response_text'])
      highest.push(((highestOne['votes'].length/totalVotes)*100).toFixed(0)+'%')
      let correctAnswer = responses.find(r=>{
        return r.id === this.props.card.correct
      })
      console.log('correct', correctAnswer);
      this.setState({
        clicked: clicked,
        responsesAndVotePercentages: responsesAndVotePercentages,
        highestResponse: highest,
        correctAnswer: correctAnswer
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

  showMontage = () => {
    console.log('montaging');
    this.montage()
    if (this.props.currentLevel >= this.props.level) {
      if (this.props.card.text) {
        return (
          <div className="card">
            <div className="card-text-container">
              <p>{this.props.card.text}</p>
            </div>
            <br/>
            {this.showButtons()}
          </div>
        )
      } else {
        return (
          <div className="card">
            <div className="card-img-container">
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
  }

  goThroughTheCards = () => {
    if (this.props.level === this.props.currentLevel) {
      if (this.props.card.responses.length > 0) {
        if (this.props.card.responses[0].text !== 'Play again') {
          this.props.nextCardOrRestart()
        } else {
          this.props.nextLevel()
        }
      } else {
      }
    } else {
    }
  }

  montage = () => {
    setInterval(this.goThroughTheCards, 3000)
  }

  render() {
    console.log('Card props', this.props);
    return (
      <div className="card-container">
        {this.props.montage ? this.showMontage() : this.showCard()}
      </div>
    )
  }
}

export default Card;
