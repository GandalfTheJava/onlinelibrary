import React, { useEffect, useContext } from 'react';
import './App.scss';
import Header from './components/header/header.component';
import Directory from './components/directory/directory';
import LoginPage from './components/login-page/login-page.component';
import RegisterPage from './components/register-page/register.component';
import Genre from './components/Genre/Genre.component';
import AlertDemo from './components/alert-demo/alert.component';
import axios from 'axios';
import { UserContext } from './components/provider/user.provider';
import { Switch, Route } from "react-router-dom";

function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    const checkLoggedIn = async () => { //check to see if a valid jwt token is present in the local storage
      let token = localStorage.getItem("auth-token");
      if (token == null) {
        localStorage.setItem("auth-token", "");
        token = "";
        return;
      }
      const tokenResponse = await axios.post('http://localhost:5000/users/tokenisvalid',
        null,
        {
          headers: { "x-auth-token": token }
        })
      if (tokenResponse.data) {
        const userData = await axios.get('http://localhost:5000/users/', { headers: { "x-auth-token": token } });
        setCurrentUser({ type: 'LOG_IN_USER', payload: userData.data })
      };
    };
    checkLoggedIn();
  }, [])
  return (
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
  );
}

export default App;
