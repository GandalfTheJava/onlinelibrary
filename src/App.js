import React from 'react';
import './App.scss';
import Header from './components/header/header.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container-wrap">
        <Header />
        <Router>
          <Route path="/signIn" component="signin" />
        </Router>
        <div className="body">

        </div>
        <div className="footer">

        </div>
      </div>
    </div>
  );
}

export default App;
