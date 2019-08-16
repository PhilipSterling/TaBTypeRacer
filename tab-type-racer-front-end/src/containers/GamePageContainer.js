import React from "react";
import Nav from "./Nav";
import GameSelectContainer from './GameSelectContainer';
// import GameContainer from './GameContainer';
import { Route, Redirect } from "react-router";
import '../css/gamepagecontainer.css';

class GamePageContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      renderGame: false
    }
  }

  handleNewGameClick = () => {
    console.log('hello')
    this.setState({
      renderGame: true
    })
  }

  render() {
    return (
      <div className="game-container">
        <Nav />
        <div id="select-container">
        {this.state.renderGame ? <Redirect to="/game/new" />
: <GameSelectContainer handleNewGameClick={this.handleNewGameClick}/>}
        </div>      
      </div>
    );
  }
}

export default GamePageContainer;