import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './App.scss';
import { UserProvider } from './components/provider/user.provider';
import { DirectoryProvider } from './components/provider/directory.provider';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <DirectoryProvider>
          <Route path="/" component={App} />
        </DirectoryProvider>
      </UserProvider >
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);