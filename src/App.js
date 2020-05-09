import React from 'react';
import './App.scss';
import './Global.scss';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <div className="container-wrap">
        <div className="header">
          <Header />
        </div>
        <div className="body">

        </div>
        <div className="footer">

        </div>
      </div>
    </div>
  );
}

export default App;
