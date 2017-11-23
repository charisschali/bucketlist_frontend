import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <div id="wrapper">
        <form>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <input type="submit" value="login" />
        </form>
      </div>
    )
  }
}

export default LoginPage;
