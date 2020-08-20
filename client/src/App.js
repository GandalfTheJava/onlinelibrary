import React, { useEffect, useContext } from 'react';
import './App.scss';
import Directory from './components/directory/directory';
import LoginPage from './components/pages/login-page/login-page.component';
import RegisterPage from './components/pages/register-page/register.component';
import Genre from './components/Genre/Genre.component';
import PageNotFound from './components/pages/not-found-page/not-found-page';
import Homepage from './components/pages/homepage/homepage.component';
import PrivateRoute from './Utils/PrivateRoute.jsx';
import PublicRoute from './Utils/PublicRoute.jsx';
import NotAuth from './components/pages/not-authorised-page/not-auth.component';
//import AlertDemo from './components/alert-demo/alert.component';
import { UserContext } from './components/provider/user.provider';
import { checkLoggedIn } from './Utils/App.util';
import { Switch, Route } from "react-router-dom";

function App() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  let { authorised } = currentUser;
  useEffect(() => {
    const reLogInUser = async () => {
      const { token, user } = await checkLoggedIn() || {};
      if (token != null && user != null) setCurrentUser({ type: 'LOG_IN_USER', token: token, payload: user });
    }
    reLogInUser();
  }, [setCurrentUser, authorised])
  return (
    < div className="App" >
      <div className="container-wrap">
        <Switch>

          <PublicRoute exact path="/" component={LoginPage} auth={authorised} />
          <PublicRoute exact path="/register" component={RegisterPage} auth={authorised} />
          <PublicRoute exact path="/notauthorised" component={NotAuth} auth={authorised} />

          {/* <PrivateRoute path="/homepage/directory" component={Directory} auth={authorised} />
          <PrivateRoute path="/genre/:genreid/" component={Genre} auth={authorised} /> */}
          <PrivateRoute path="/homepage" component={Homepage} auth={authorised} />

          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div >
  );
}

export default App;
