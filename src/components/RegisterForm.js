import React, { Component } from 'react';
import axios from 'axios';

export default class RegisterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordCheck: ''
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePasswordCheck = this.handlePasswordCheck.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleUsername(e){
    this.setState({username: e.target.value})
  }

  handlePassword(e){
    this.setState({password: e.target.value})
  }

  handlePasswordCheck(e){
    this.setState({passwordCheck: e.target.value})
  }

  handleRegister(){
    axios.post('/api/register',{username: this.state.username, password: this.state.password, passwordCheck: this.state.passwordCheck})
    .then((res) => {
      if(res.data.success){
        this.setState({username: '', password: '', passwordCheck: ''});
        alert(res.data.msg);
      }else{
        this.setState({username: '', password: '', passwordCheck: ''});
        alert(res.data.err);
      }
    })
    .catch((err) => {
      if(err){
        this.setState({username: '', password: '', passwordCheck: ''});
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

          <div className="form-group">
            <label htmlFor="passwordCheck">Password Check</label>
            <input type="password" className="form-control" id="passwordCheck" onChange={ this.handlePasswordCheck } value={ this.state.passwordCheck } placeholder="Enter password" />
          </div>
        </form>
        <button className="btn btn-primary" onClick={ this.handleRegister }>Register</button>
      </div>
    );
  }
}
