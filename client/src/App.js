import React from 'react';
import './App.scss';
import Header from './components/header/header.component';
import Directory from './components/directory/directory';
import LoginPage from './components/login-page/login-page.component';
import RegisterPage from './components/register-page/register.component';
import Genre from './components/Genre/Genre.component';
import AlertDemo from './components/alert-demo/alert.component';
import { UserProvider } from './components/provider/user.provider';
import { DirectoryProvider } from './components/provider/directory.provider';
import { ModalProvider } from './components/provider/modal.provider';
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <DirectoryProvider>
        <ModalProvider>
          <div className="App">
            <Header />
            <AlertDemo />
            <div className="container-wrap">
              <Switch>
                <Route exact path="/" component={Directory} />
                <Route path="/genre/:genreid/" component={Genre} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
              </Switch>
            </div>
          </div>
        </ModalProvider>
      </DirectoryProvider>
    </UserProvider >
  );
}

export default App;
