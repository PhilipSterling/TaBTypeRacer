import React from "react";
import '../css/gameselectcontainer.css'
import { Redirect } from "react-router";

class GameSelectContainer extends React.Component {
  constructor () {
    super();
    this.state={
      hostroom: false
    }
  }

  handleHostRoomClick = () => {
    this.setState({
      hostroom: true
    })
  }

  render() {
    return (
      <div id="select-container2">
        <div className="info">
          <img className="image" src={this.props.user.avatar} />
          <h3>Welcome {this.props.user.username}</h3>
        </div>
        <h2 className="selection" onClick={this.props.handleNewGameClick}>
          1 Player
        </h2>
        <h2 className="selection" onClick={this.handleHostRoomClick}>
          Host Room
        </h2>
        {this.state.hostroom ? (
          <Redirect
            to={{
              pathname: "/hostroom",
              state: { user: this.props.user }
            }}
          />
        ) : null}
        <h2 className="selection" onClick={null}>
          Enter Room
        </h2>
      </div>
    );
  }
}

export default GameSelectContainer;
