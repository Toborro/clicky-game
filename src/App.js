import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {

    };

    clickEvent = event => {
    // here is where i will add code to have the image taken out of the array.
    }

    // add code for choosing correct each time, incrementing score by 1 each time you choose an image that has not been clicked before.

    // future area for winning the game and setting up a victory modal/pop-up

    // add code for game failure, such as "ifChosenBefore -> set state to reset the game and change the order of images again."

    
    render() {
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
      </div>
    );
  }
}

export default App;
