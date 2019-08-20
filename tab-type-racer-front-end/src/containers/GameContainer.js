import React from "react";
import Nav from './Nav';
import "../css/gamecontainer.css";

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
      game_id: undefined,
      percentage: 0,
      errorNumber: 0,
      wordFlag: false,
      finished: false
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:7777/challenges/random', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(res => res.json())
    .then(data => {this.setState({
      challengeID: data.id,
      challengeCategory: data.category,
      challenge: data.paragraph,
      allWords: data.paragraph.split(" "),
      numAllWords: data.paragraph.split(" ").length,
    })
  })
  }


  handleChange = (e) => {
    let percentage = this.state.percentage
    let input = e.target.value
    let index = input.length -1
    if(index !== -1){
      if(input != ""){
        if(this.state.allWords[0].charAt(index) != input.charAt(input.length-1)) {
          if(!this.state.wordFlag){
          this.setState({errorNumber: ++this.state.errorNumber,
          wordFlag: true})}
        }
      }
    }
    if(this.state.allWords[0] !==  undefined){
    if(input == this.state.allWords[0] + " "){
      this.state.allWords.shift()
      percentage = Math.floor(((this.state.numAllWords - this.state.allWords.length) / this.state.numAllWords) * 104)
      console.log(percentage)
      this.setState({allWords: this.state.allWords,
        wordFlag: false,
      })
      input = ""
      index = 0
    }
    if(this.state.allWords[0] !== undefined){
    this.setState({
      input,
      index,
      characAt: this.state.allWords[0].charAt(index),
      percentage
    })
  }
    } else {
      this.finishGame()
    }
  }

  finishGame = () => {
    this.setState({input: ""})
    fetch(`http://localhost/7777/games/${this.state.game_id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({
      endtime: Date.now(),
    })
    })
    .then(res => res.json())
    .then(data => {
      fetch(`http://localhost/7777/games/${this.state.game_id}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`},
        body: JSON.stringify({
        })
      })
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleCategoryChange = (e) => {
    console.log(e.target.value);
    //render paragraph based on the selected category, default paragraphs from all category
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
            <button className="start-button">Start</button>
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
              {<p>{this.state.challenge}</p> }
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
          <img className="goodjob" src="https://media.giphy.com/media/3o7abGQa0aRJUurpII/giphy.gif" />
          <h3>Good Job! {this.props.location.state.user.username}</h3>
          <h3>You speed is:</h3>
        </div>
      </div>
    );
  }
}

export default GameContainer;
