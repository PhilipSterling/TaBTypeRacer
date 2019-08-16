import React from "react";
import Nav from './Nav';
import "../css/gamecontainer.css";

class GameContainer extends React.Component {
  constructor () {
    super()
    this.state={
      challengeID: '',
      challenge: '',
      input: '',
      index: null,
      characAt: ""
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
    .then(data => this.setState({
      challenge: data.paragraph,
    }))
  }

  handleChange = (e) => {
    const input = e.target.value
    let index = input.length -1
    this.setState({
      input,
      index,
      characAt: this.state.challenge.charAt(index)
    })
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
