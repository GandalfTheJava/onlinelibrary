import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './App.scss';
import { UserProvider } from './components/provider/user.provider';
import { DirectoryProvider } from './components/provider/directory.provider';
import { SidebarProvider } from './components/provider/sidebarToggle.provider';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <DirectoryProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </DirectoryProvider>
      </UserProvider >
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);