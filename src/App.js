import React from 'react';
import './App.css';
import GitHubIcon from '@material-ui/icons/GitHub';

function App() {
  return (
    <div className="App">
      <header>
        <GitHubIcon fontSize="large" className="header-icon"/>
        <span>Github</span> 
      </header>
    </div>
  );
}

export default App;
