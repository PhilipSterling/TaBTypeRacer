import React from "react";
import Nav from "../containers/Nav";
import MultiplePlayerGameContainer from "../containers/MultiplePlayerGameContainer";
import "../css/hostroom.css";


class HostRoom extends React.Component {
  constructor() {
    super();
    this.state={
      roomcreated: false
    }

  }

  // componentDidMount = () => {

  // };

  handleClick = () => {
    this.setState({
      roomcreated: true
    })
  }

  handleCategoryChange = () => {

  }

  render() {
    return (
      <div className="hostroom-container">
        <Nav user={this.props.location.state.user} />
        {this.state.roomcreated ? (
          <MultiplePlayerGameContainer
            user={this.props.location.state.user}
          />
        ) : (
          <div>
            <label>Category: </label>
            <select
              className="category"
              onChange={this.handleCategoryChange}
            >
              <option value="all">All</option>
              <option value="dracula">Dracula</option>
              <option value="peterpan">Peter Pan</option>
            </select>
            <input
              type="submit"
              value="Create Room"
              onClick={this.handleClick}
            />
          </div>
        )}
      </div>
    ); 
  }
}

export default HostRoom;
