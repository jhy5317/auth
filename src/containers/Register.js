import React, { Component } from 'react';
import { Nav, RegisterForm } from '../components'

export default class Register extends Component {
  render(){
    return(
      <div className="container">
        <Nav />
        <br />
        <RegisterForm />
      </div>
    );
  }
}
