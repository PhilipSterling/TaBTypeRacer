import React from 'react';
import '../css/signup.css';
import { Link } from "react-router-dom";


class Signup extends React.Component {
  constructor () {
    super()
    this.state={
      userAlreadyExists: false,
      avatar: 'https://www.itsfun.com.tw/cacheimg/fd/75/fba384a3d3aeb2f641545f3eaec0.jpg',
      addClassName: true
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    fetch("https://polar-caverns-14212.herokuapp.com/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        username: name,
        password: password,
        avatar: this.state.avatar
      })
    }).then(resp => resp.json())
      .then(data => {
        if(data.error != undefined) {
          this.setState({userAlreadyExists:true})
        } else {
          localStorage.setItem('jwt', data.jwt)
          this.props.history.push({
            pathname: "/game",
            state: { user: data.user }
          });
        }
      })
  }

  handleAvatarClick = (e) => {
    const avatar = e.target.src;
    if (e.target.className === "avatar") {
      this.setState({
        avatar: avatar,
        addClassName: !this.state.addClassName
      })
    }
  }

  render () {
    return (
      <div className="signup-container">
        <div id="signup">
          {this.state.userAlreadyExists ? <p className="signup-error" >user name already exist</p> : null}
          <form id="signup-form" onSubmit={this.handleSubmit}>
            <input
              className="input-box"
              type="text"
              name="name"
              placeholder="name"
            />
            <br />
            <input
              className="input-box"
              type="password"
              name="password"
              placeholder="password"
            />
            <br />
            <label>Choose Avatar:</label>
            <div id="avatar-container">
              <img
                className={this.state.addClassName? "avatar add" : "avatar"}
                src="https://www.itsfun.com.tw/cacheimg/fd/75/fba384a3d3aeb2f641545f3eaec0.jpg"
                onClick={this.handleAvatarClick}
              />
              <img
                className={!this.state.addClassName? "avatar add" : "avatar"}
                src="https://s3-eu-west-1.amazonaws.com/thinglink/avatars/Ah/4efc1uQX8o2dFdrALBv4sDDfzR9YFmDRWJnEZ1xmXmAh.jpeg"
                onClick={this.handleAvatarClick}
              />
            </div>
            <br />
            <input
              id="button"
              className="input-box"
              type="submit"
              value="Sign Up"
            />
          </form>
          <Link className="link" to='/login'>back to login?</Link>
        </div>
      </div>
    );
  }
}

export default Signup;