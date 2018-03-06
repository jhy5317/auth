import React, { Component } from 'react';
import axios from 'axios';

export default class LoginForm extends Component{
  constructor(props){
      super(props);
      this.state = {
        username: '',
        password: ''
      }
      this.handleUsername = this.handleUsername.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }

  handleUsername(e){
    this.setState({username: e.target.value})
  }

  handlePassword(e){
    this.setState({password: e.target.value})
  }

  handleLogin(){
    axios.post('/api/login',{username: this.state.username, password: this.state.password})
    .then((res) => {
      if(res.data.success){
        this.setState({username: '', password: ''});
        document.cookie = "Username=" + res.data.user.username;
        alert(res.data.user.username + "님 환영합니다^_^");
      }else{
        this.setState({username: '', password: ''});
        alert(res.data.err);
      }
    })
    .catch((err) => {
      if(err){
        this.setState({username: '', password: ''});
        alert(err);
      }
    })
  }

  render(){
    return(
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" onChange={ this.handleUsername } value={ this.state.username } placeholder="Enter username" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" onChange={ this.handlePassword } value={ this.state.password } placeholder="Enter password" />
          </div>
        </form>
        <button className="btn btn-primary" onClick={ this.handleLogin }>Login</button>
      </div>
    );
  }
}
