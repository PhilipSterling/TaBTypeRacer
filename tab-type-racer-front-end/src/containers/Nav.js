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
        <Link
          className="nav-content"
          to={{
            pathname: "/profile",
            state: { user: this.props.user}
          }}
        >
          Profile
        </Link>
        <Link className="nav-content" to={{
            pathname: "/game",
            state: { user: this.props.user}
          }}>
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
