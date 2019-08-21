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
    fetch('https://polar-caverns-14212.herokuapp.com/login', {
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
        this.props.history.push({
          pathname: "/game",
          state: { user: data.user }
        });
        // this.setState({
        //   user: data.user
        // })
      }
    })
  }

  render () {
    return (
      <div className="login-container">
        <div id="login">
          {this.state.failedLogin ? <p className="login-error">User name doesn't match your password</p> : null}
          <form id="login-form" onSubmit={this.handleSubmit}>
            <input 
            name="username" 
            className="input-box" 
            type="text" 
            placeholder="name" 
            />
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
