import React from 'react';
import './App.scss';
import Header from './components/header/header.component';
import Directory from './components/directory/directory.component';
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
          <Route path="/" component={Directory} />
          <Route exact path="/signIn" />
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
