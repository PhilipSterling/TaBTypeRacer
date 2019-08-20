import React from "react";
import Nav from "../containers/Nav"
import '../css/profile.css'


class Profile extends React.Component {
  constructor () {
    super()
    this.state = {
      games: [],
      bestspeed: 0,
      averagespeed: 0,
      averageaccuracy: "0%"
    }
  }

  componentDidMount = () => {
    //fetch games data here
    // fetch("http://localhost:7777/games")
    // .then(resp => resp.json())
    // .then(data => {
    //   this.setState({
    //     games: data
    //   })
    // })
  }

  render() {
    {console.log(this.props.location.state.user)}
    return (
      <div id="profile-container">
        <Nav user={this.props.location.state.user} />
        <div className="profile-container2">
          <div className="profile">
            <h3 className="name">{this.props.location.state.user.username}</h3>
            <img src={this.props.location.state.user.avatar} />
            <h4>Best Type Speed: {this.state.bestspeed}</h4>
            <h4>Average Type Speed: {this.state.averagespeed}</h4>
            <h4>Average Accuracy: {this.state.averageaccuracy}</h4>
          </div>
          <div className="history">
            <p>🖥️ Game records:</p>
            <table>
              <tbody>
                <tr>
                  <th>Date</th>
                  <th>Type Speed</th>
                  <th>Accuracy</th>
                  <th>Category</th>
                </tr>
                {/* map challenges into table tag: date - typespeed - percentage - category*/}
                {this.state.games.map(game => {
                  return (
                    <tr>
                      <th>{game.created_at}</th>
                      <th>100wpm</th>
                      <th>{game.percentage}</th>
                      <th>{game.category}</th>
                    </tr>
                  );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
