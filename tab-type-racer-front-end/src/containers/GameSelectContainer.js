import React from "react";
import '../css/gameselectcontainer.css'

class GameSelectContainer extends React.Component {
  render() {
    return (
      <div id="select-container2">
        <h2 className="selection" onClick={this.props.handleNewGameClick}>
          1 Player
        </h2>
        <h2 className="selection" onClick={null}>
          Host Room
        </h2>
        <h2 className="selection" onClick={null}>
          Enter Room
        </h2>
      </div>
    );
  }
}

export default GameSelectContainer;
