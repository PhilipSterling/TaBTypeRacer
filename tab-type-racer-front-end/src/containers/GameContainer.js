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
    })
  })
  }

  handleChange = (e) => {
    let input = e.target.value
    let index = input.length -1
    if(input == this.state.allWords[0] + " "){
      this.state.allWords.shift()
      this.setState({allWords: this.state.allWords,
      })
      input = ""
      index = 0
    }
    this.setState({
      input,
      index,
      characAt: this.state.challenge.charAt(index)
    })
    if(this.state.allWords[0] === undefined){
      this.finishGame()
    }
  }

  finishGame = () => {
    console.log("ashdojabhwdkjhawkudhakwhdkhawgdkjahwdkgawjdhakjwbdkjawbdkuabwkjhdbawkjd")
    
  }


  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div id="newgame-container">
        <Nav />
        <div className="newgame-container2">
          <div className="newgame-container3">
            <form onSubmit={this.handleSubmit}>
              <p>{this.state.challenge}</p>
              <input type="text" onChange={this.handleChange} value={this.state.input}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default GameContainer;
