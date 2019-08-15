import React from 'react';
import '../css/signup.css'


class Signup extends React.Component {
  constructor () {
    super()
    this.state={
      avatar: ''
    }
  }

  // handleClick = (e) => {
  //   const name = e.target.name;
  //   const password = e.target.password;
  //   fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ 
  //       name: name,
  //       password: password,
  //       avatar: this.state.avatar
  //     })
  //   }).then(resp => resp.json())
  //     .then(data => console.log(data))
  // }

  handleAvatarClick = (e) => {
    const avatar = e.target.src;
    this.setState({avatar})
  }

  render () {
    return (
      <div>
        <form onClick={this.handleClick}>
          <input type="text" name="name" placeholder="name"/>
          <br />
          <input type="password" name="password" placeholder="password" />
          <br />
          <img
            className="avatar"
            src="https://www.itsfun.com.tw/cacheimg/fd/75/fba384a3d3aeb2f641545f3eaec0.jpg"
            onClick={this.handleAvatarClick}
          />
          <img
            className="avatar"
            src="https://s3-eu-west-1.amazonaws.com/thinglink/avatars/Ah/4efc1uQX8o2dFdrALBv4sDDfzR9YFmDRWJnEZ1xmXmAh.jpeg"
            onClick={this.handleAvatarClick}
          />
          <br />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

export default Signup;