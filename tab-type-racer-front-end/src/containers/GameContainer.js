import React from "react";
import Nav from './Nav';
import "../css/gamecontainer.css";

class GameContainer extends React.Component {
  render() {
    return (
      <div id="newgame-container">
        <Nav />
        <div className="newgame-container2">
        </div>
      </div>
    );
  }
}

export default GameContainer;
