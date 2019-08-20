import React from "react";
import Nav from "../containers/Nav";
import "../css/hostroom.css";

class HostRoom extends React.Component {
  constructor() {
    super();

  }

  componentDidMount = () => {

  };

  render() {
    return (
      <div className="hostroom-container">
        <Nav user={this.props.location.state.user} />

      </div>
    ); 
  }
}

export default HostRoom;
