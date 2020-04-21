import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');

function App() {

const handleClick = () => {
  axios.post('/api', {
    name: 'Dylan'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={ () => handleClick() }> Add a kitty to the database</button>
    </div>
  );
}

export default App;
