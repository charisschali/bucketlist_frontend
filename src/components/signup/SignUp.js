import React, { Component } from 'react';
import './SignUp.css';

class Signup extends Component {
  render() {
    return (
      <div id="wrapper" className="wrapperStyle">
        <form>
          <input type="text" placeholder="username" className="inputStyle"/>
          <input type="text" placeholder="email" className="inputStyle"/>
          <input type="text" placeholder="password" className="inputStyle"/>
          <input type="submit" value="Register" className="inputStyle"/>
        </form>
      </div>
    )
  }
}

export default Signup;
