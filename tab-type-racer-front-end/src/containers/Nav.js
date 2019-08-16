import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
import { Route, Redirect} from 'react-router'

class Nav extends React.Component {
  state={logout: false}
  componentDidMount(){
    this.setState({logout:false})
  }
  handleLogout =() =>{
    localStorage.setItem('jwt', null)
    this.setState({logout: true})
  }
  render() {
    return (
      <div id="nav">
        <Link className="nav-content" to="/profile">
          Profile
        </Link>
        <Link className="nav-content" to="/game">
          New Game
        </Link>
        <h4 className="nav-content" onClick={this.handleLogout}>
          Logout
        </h4>
          {this.state.logout ? <Redirect to="/login" /> : null}
      </div>
    );
  }
}

export default Nav;
