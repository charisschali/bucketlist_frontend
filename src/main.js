import React from 'react'
import { render } from 'react-dom'
// Importing routing components
import {BrowserRouter, Route, browserHistory, Switch} from 'react-router-dom';
// Importing custom components
import App from './app';
import Signup from './components/signup/SignUp';
import LoginPage from './components/login/Login';


render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/register" component={Signup}/>
      <Route path="/login" component={LoginPage }/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
)
