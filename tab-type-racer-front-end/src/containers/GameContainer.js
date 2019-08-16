import React from "react";
import Nav from './Nav';
import "../css/gamecontainer.css";

class GameContainer extends React.Component {
  constructor () {
    super()
    this.state={
      input: ''
    }
  }

  componentDidMount = () => {
    //fetch data from challenage
    // fetch()
    // .then(resp => resp.json())
    // .then(data => console.log(data))
  }

  handleChange = (e) => {
    const input = e.target.value
    this.setState({
      input
    })
  }

  render() {
    return (
      <div id="newgame-container">
        <Nav />
        <div className="newgame-container2"> 
          <div className="newgame-container3">
            <form>
              <p></p>
              <input type="text" onChange={this.handleChange}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default GameContainer;
