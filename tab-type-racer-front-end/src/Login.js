import React from 'react';
import { Link } from "react-router-dom";
import './css/login.css'
import {Redirect} from 'react-router'

class Login extends React.Component {
  constructor () {
    super()
    this.state={
      failedLogin: false
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    fetch('http://localhost:7777/login', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.message != undefined) {
        this.setState({failedLogin: true})
      } else {
        localStorage.setItem('jwt', data.jwt)
        this.props.history.push("/game");
      }
    })
  }

  render () {
    return (
      <div className="login-container">
        <div id="login">
          {this.state.failedLogin ? <p>HAO REDO THIS LOGIN ERROR</p> : null}
          <form id="login-form" onSubmit={this.handleSubmit}>
            <input name="username" className="input-box" type="text" placeholder="name" />
            <br />
            <input
              name="password"
              className="input-box"
              type="password"
              placeholder="password"
            />
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
      </div>
    );
  }
}

export default Login;
