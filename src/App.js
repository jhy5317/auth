import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import { Login, Register } from './containers';

export default class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = { Login } />
          <Route path = '/register' component = { Register } />
        </Switch>
      </BrowserRouter>
    );
  }
}
