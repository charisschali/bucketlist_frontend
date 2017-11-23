import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Signup from '../signup/SignUp';
import LoginPage from '../login/Login';

class LandingPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav>
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    );
  }
}

export default LandingPage;
