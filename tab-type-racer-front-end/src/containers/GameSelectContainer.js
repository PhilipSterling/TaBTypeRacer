import React from "react";
import '../css/gameselectcontainer.css'

class GameSelectContainer extends React.Component {
  render() {
    return (
      <div id="select-container2">
        <h2 className="selection" onClick={null}>
          1 Player
        </h2>
        <h2 className="selection" onClick={null}>
          2 Player
        </h2>
        <button onClick={this.props.handleNewGameClick}>
          Start Game
        </button>
      </div>
    );
  }
}

export default GameSelectContainer;
