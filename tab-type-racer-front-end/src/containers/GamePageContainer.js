import React from "react";
import Nav from "./Nav";
import GameSelectContainer from './GameSelectContainer';
// import GameContainer from './GameContainer';
import { Redirect } from "react-router";
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
    // {console.log(this.props.location.state.user)}
    return (
      <div className="game-container">
        <Nav user={this.props.location.state.user} />
        <div id="select-container">
          {this.state.renderGame ? (
            <Redirect
              to={{
                pathname: "/newgame",
                state: { user: this.props.location.state.user }
              }}
            />
          ) : (
            <GameSelectContainer
              user={this.props.location.state.user}
              handleNewGameClick={this.handleNewGameClick}
            />
          )}
        </div>
      </div>
    );
  }
}

export default GamePageContainer;