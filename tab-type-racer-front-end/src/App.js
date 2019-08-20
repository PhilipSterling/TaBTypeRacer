import React from "react";
import Login from "./Login";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import HostRoom from "./components/HostRoom";
import GamePageContainer from "./containers/GamePageContainer";
import GameContainer from "./containers/GameContainer";
import Nav from "./containers/Nav";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import TestComponent from "./components/TestComponent";

class App extends React.Component {
  render() {
    return (
      <div className="app bg">
        {/* <TestComponent /> */}
        <Router>
          <Route path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/game" component={GamePageContainer} />
          <Route path="/newgame" component={GameContainer} />
          <Route path="/profile" component={Profile} />
          <Route path="/hostroom" component={HostRoom} />
        </Router>
      </div>
    );
  }
}

export default App;
