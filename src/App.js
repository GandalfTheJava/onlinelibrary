import React from 'react';
import './App.scss';
import Header from './components/header/header.component';
import Directory from './components/directory/directory.component';
import LoginPage from './components/login-page/login-page.component';
import RegisterPage from './components/register-page/register.component';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container-wrap">
        <Header />
        <Switch>
          <Route exact path="/" component={Directory} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
        <div className="body">

        </div>
        <div className="footer">

        </div>
      </div>
    </div>
  );
}

export default App;
