import React from 'react';
import { Link } from "react-router-dom";
import './css/login.css'

class Login extends React.Component {
  // constructor () {
  //   super()
  //   this.state={
  //     is
  //   }
  // }
  
  // handleClick = () => {
  //   if () {
  //   this.props.history.push("/game");
  //   } else {

  //   }
  // }

  render () {
    return (
      <div id="login">
        <form id="login-form" onClick={this.handleClick}>
          <input className="input-box" type="text" placeholder="name"/>
          <br />
          <input className="input-box" type="password" placeholder="password"/>
          <br />
          <input
            className="input-box"
            id="button"
            type="submit"
            value="submit"
          />
        </form>
        <Link id="signup" to="/signup">
          Create New User
        </Link>
      </div>
    );
  }
}

export default Login;
