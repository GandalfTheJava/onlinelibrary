import React, { useEffect, useContext } from 'react';
import './App.scss';
import Header from './components/header/header.component';
import Directory from './components/directory/directory';
import LoginPage from './components/login-page/login-page.component';
import RegisterPage from './components/register-page/register.component';
import Genre from './components/Genre/Genre.component';

//import AlertDemo from './components/alert-demo/alert.component';

import { UserContext } from './components/provider/user.provider';
import { checkLoggedIn } from './App.util';
import { Switch, Route } from "react-router-dom";

function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    const reLogInUser = async () => {
      const { token, user } = await checkLoggedIn() || {};
      if (user !== null && token !== "") setCurrentUser({ type: 'LOG_IN_USER', token: token, payload: user });
    }
    reLogInUser();
  }, [setCurrentUser])
  return (
    <div className="App">
      <div className="container-wrap">
        {/* <Route path="/" component={Header} /> */}
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/genre/:genreid/" component={Genre} />
          <Route path="/login" component={Directory} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
