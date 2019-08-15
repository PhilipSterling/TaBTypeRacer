import React from 'react';
import Login from './Login';
import Signup from "./components/Signup";
import HomePage from './components/HomePage';
import Profile from "./components/Profile";
import GameContainer from "./containers/GameContainer";
import Nav from "./containers/Nav";
import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'


class App extends React.Component {

  render () {
    return (
      <div>
        <Router>
          <Route path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/game" component={GameContainer} />
          <Route path="/profile" component={Profile} />
        </Router>
      </div>
    );
  }
}

export default App;
