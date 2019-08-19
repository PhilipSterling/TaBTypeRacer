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
      characAt: "",
      finished: false
    }
  }

  // componentDidMount = () => {
  //   fetch('http://localhost:7777/challenges/random', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('jwt')}`
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => this.setState({
  //     challenge: data.paragraph,
  //   }))
  // }

  handleChange = (e) => {
    const input = e.target.value
    let index = input.length -1
    this.setState({
      input,
      index,
      characAt: this.state.challenge.charAt(index),
      percentage: input.length
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
    const width = this.state.percentage + "%";
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
              <option value="dragon">Dragon</option>
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
              {/* <p>{this.state.challenge}</p> */}
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
        </div>
      </div>
    );
  }
}

export default GameContainer;
