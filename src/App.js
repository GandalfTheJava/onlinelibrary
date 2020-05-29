import React from 'react';
import './App.scss';
import Header from './components/header/header.component';
import Directory from './components/directory/directory.component';
import LoginPage from './components/login-page/login-page.component';
import RegisterPage from './components/register-page/register.component';
import { UserProvider } from './components/provider/user.provider';
import { DirectoryProvider } from './components/provider/directory.provider';
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <DirectoryProvider>
        <div className="App">
          <Header />
          <div className="container-wrap">
            <Switch>
              <Route exact path="/" component={Directory} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
            </Switch>
          </div>
        </div>
      </DirectoryProvider>
    </UserProvider>
  );
}

export default App;
