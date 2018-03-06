import React, { Component } from 'react';
import { Nav, LoginForm } from '../components'

export default class Login extends Component {
  render(){
    return(
      <div className="container">
        <Nav />
        <br />
        <LoginForm />
      </div>
    );
  }
}
