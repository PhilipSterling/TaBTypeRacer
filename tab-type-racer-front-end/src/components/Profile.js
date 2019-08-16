import React from "react";
import Nav from "../containers/Nav"
import '../css/profile.css'


class Profile extends React.Component {
  render() {
    return (
      <div id="profile-container">
        <Nav />
        <div className="profile-container2"></div>
      </div>
    );
  }
}

export default Profile;
