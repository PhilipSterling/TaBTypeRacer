import React from "react";
import Nav from "../containers/Nav"
import '../css/profile.css'


class Profile extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div id="profile-container">
        <Nav />
        <div className="profile-container2">
          <div className="profile">
            <h3>Name: {/*put user's name here*/}</h3>
            {/* put user's avatar in img tag */}
            <img src={null} />
            <h4>Best Type Speed: {/*put user's name here*/}</h4>
            <h4>Average Type Speed: {/*put user's name here*/}</h4>
          </div>
          <div className="history">
            <p>Game records:</p>
            <table>
              <tr>
                <th>Date</th>
                <th>Type Speed</th>
                <th>Accuracy</th>
                <th>Category</th>
              </tr>
              {/* map games into table tag: date - typespeed - percentage - category*/}
              <tr>
                <th>08/16/2019</th>
                <th>100wpm</th>
                <th>95%</th>
                <th>dragon</th>
              </tr>
              <tr>
                <th>08/16/2019</th>
                <th>80wpm</th>
                <th>55%</th>
                <th>dragon</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
