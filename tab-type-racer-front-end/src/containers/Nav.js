import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

class Nav extends React.Component {
  render() {
    return (
      <div id="nav">
        <Link className="nav-content" to="/profile">
          Profile
        </Link>
        <Link className="nav-content" to="/game">
          New Game
        </Link>
        <h4 className="nav-content" onClick={null}>
          log out
        </h4>
      </div>
    );
  }
}

export default Nav;
