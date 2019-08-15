import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

class Nav extends React.Component {
  render() {
    return (
      <div id="nav">
        <Link to="/profile">Profile</Link>
        <h4 onClick={null}>log out</h4>
      </div>
    );
  }
}

export default Nav;
