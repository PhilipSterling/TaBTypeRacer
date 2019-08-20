import React from "react";
// import "../css/hostroom.css";

class MultiplePlayerGameContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      userList: null,
      percentage: 0,
      display: "00:20"
    };
  }

  componentDidMount = () => {
    this.startTimer(19);
  };
  
  startTimer = (duration) => {
    let timer = duration,
      minutes,
      seconds;
    let myVar = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      const textContent = minutes + ":" + seconds;
      this.setState({
        display: textContent
      })

      if (--timer < 0) {
        console.log('times up')
        clearInterval(myVar);
      }
    }, 1000);
  }

  render() {
    const width = this.state.percentage - 7 + "%";
    return (
      <div className="newgame-container2">
        <div>
          Timer: <span id="time">{this.state.display}</span> minutes!
        </div>
        <div className="newgame-container3">
          <div className="percentage-container">
            <img
              className="avatar-image"
              style={{ marginLeft: width }}
              src={this.props.user.avatar}
            />
          </div>
          <div className="percentage-container">
            <img
              className="avatar-image"
              style={{ marginLeft: width }}
              src={this.props.user.avatar}
            />
          </div>
          <form className="inputcontainer" onSubmit={this.handleSubmit}>
            {<p>{this.state.challenge}</p>}
            <input
              className="typeinput"
              type="text"
              onChange={this.handleChange}
              value={this.state.input}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default MultiplePlayerGameContainer;
