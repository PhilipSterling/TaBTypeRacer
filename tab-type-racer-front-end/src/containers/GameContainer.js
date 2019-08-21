import React from "react";
import Nav from './Nav';
import "../css/gamecontainer.css";
import { Route, Redirect} from 'react-router'

class GameContainer extends React.Component {
  constructor () {
    super()
    this.state={
      challengeID: '',
      challengeCategory: '',
      challenge: '',
      input: '',
      index: null,
      characAt: "",
      allWords: [],
      numAllWords: 0,
      percentage: 0,
      errorNumber: 0,
      wordFlag: false,
      finished: false,
      chosenCategory: "all",
      gameID: null,
      wpm: null,
      currWordCorrect: "Yellow",
      currentWord: null,
      finishedWords: [],
      renderRemainingWords: "",
      newGame: false

    }
  }

  componentDidMount = () => {
  }


  handleChange = (e) => {
    let percentage = this.state.percentage
    let input = e.target.value
    let index = input.length -1
    if(this.state.allWords[0] !==  undefined){
      this.setState({currentWord: this.state.allWords[0]+ " "})
      if(index !== -1){
        if(input != ""){
          if(this.state.allWords[0].charAt(index) != input.charAt(input.length-1) && input != this.state.allWords[0] + " ") {
            if(!this.state.wordFlag){
            this.setState({errorNumber: ++this.state.errorNumber,
            wordFlag: true,
            currWordCorrect: "red"})}
          }
        }
      }
      if(input == this.state.allWords[0] + " " || (this.state.allWords.length == 1 && input == this.state.allWords[0])){
        this.state.finishedWords.push(this.state.allWords.shift() + " ")
        let newCurrent;
        if (this.state.allWords.length == 0) {newCurrent = " " } else {newCurrent = this.state.allWords[0] + " " }
        this.setState({renderRemainingWords: this.state.allWords.map((word,index) => {
          if(index != 0){
          return word + " "
          }
        }),
        currentWord: newCurrent})
        percentage = Math.floor(((this.state.numAllWords - this.state.allWords.length) / this.state.numAllWords) * 104)
        console.log(percentage)
        this.setState({allWords: this.state.allWords,
          wordFlag: false,
          currWordCorrect: "yellow",
        })
        input = ""
        index = -1 

      }
      if(this.state.allWords[0] !== undefined){
      this.setState({
        input,
        index,
        characAt: this.state.allWords[0].charAt(index),
        percentage
      })
    }
    }
    if(this.state.allWords.length == 0 && this.state.gameID != null){

      this.finishGame()
    }
  }

  finishGame = () => {
    let perRight = 100 - ((this.state.errorNumber / this.state.numAllWords) * 100)
    this.setState({input: "", challenge: ""})
    fetch(`https://polar-caverns-14212.herokuapp.com/games/${this.state.gameID}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({
      percentage: perRight
    })
    }).then(res => res.json()).then(data => {
      this.setState({wpm: data.wpm, finished: true, currentWord: " ", renderRemainingWords: "", finishedWords: ""})
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleStartGame = () => {
    let tempID = 0;
    fetch('https://polar-caverns-14212.herokuapp.com/challenges/random', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        categoryheader: this.state.chosenCategory
      }
    })
    .then(res => res.json())
    .then(data => {this.setState({
      challengeID: data.id,
      challengeCategory: data.category,
      challenge: data.paragraph,
      renderRemainingWords: data.paragraph.split(" ").map((word,index) => {
        if(index != 0) {
          return word
        }
      }).join(" "),
      allWords: data.paragraph.split(" "),
      numAllWords: data.paragraph.split(" ").length,
    })
      fetch('https://polar-caverns-14212.herokuapp.com/games', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
     },
     body: JSON.stringify({
        user_id: this.props.location.state.user.id,
        challenge_id: data.id,
      })
    }).then(res => res.json()).then(data => {
      this.setState({gameID: data.id})})
  })
  }

  handleCategoryChange = (e) => {
    this.setState({chosenCategory: e.target.value})
    //render paragraph based on the selected category, default paragraphs from all category
  }

  handleNewgame = () => {
    this.setState({
      newGame: true
    })
  }

  render() {
    //percentage finished of the paragraph
    const width = (this.state.percentage - 7) + "%";
    return (
      <div id="newgame-container">
        <Nav user={this.props.location.state.user} />

        <div className="newgame-container2">
          <div className="category-container">
            <label>Category: </label>
            <select
              className="category"
              onChange={this.handleCategoryChange}
            >
              <option value="all">All</option>
              <option value="dracula">Dracula</option>
              <option value="peterpan">Peter Pan</option>
            </select>
            <button className="start-button" onClick={this.handleStartGame}>Start</button>
          </div>
          <div className="newgame-container3">
            <div className="percentage-container">
              <img
                className="avatar-image"
                style={{ marginLeft: width }}
                src={this.props.location.state.user.avatar}
              />
            </div>
            <form className="inputcontainer" onSubmit={this.handleSubmit}>
              {<p><span style={{color: "green"}}>{this.state.finishedWords}</span><span style={{color: this.state.currWordCorrect}}>{this.state.currentWord}</span><span style={{color: "white"}}>{this.state.currentWord ? this.state.renderRemainingWords : this.state.challenge}</span></p> }

              <input
                className="typeinput"
                type="text"
                onChange={this.handleChange}
                value={this.state.input}
              />
            </form>
          </div>
        </div>

        {/*pop up component */}
        <div
          style={{
            visibility: this.state.finished ? "visible" : "hidden"
          }}
          className="popup"
        >
          <img
            className="goodjob"
            src="https://media.giphy.com/media/3o7abGQa0aRJUurpII/giphy.gif"
          />
          <h3 className="font">Good Job {this.props.location.state.user.username}!</h3>
          <h3 className="font">Words Per Minute: {this.state.wpm}</h3>
          <button className="newgame-button" onClick={this.handleNewgame}>
            New Game
          </button>
          {this.state.newGame ? (
            <Redirect
              to={{
                pathname: "/game",
                state: { user: this.props.location.state.user }
              }}
            />
          ) : null}

        </div>
      </div>
    );
  }
}

export default GameContainer;
