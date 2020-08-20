import React, { Component } from 'react';
import './App.css';
import CostumeChanger from './Components/CostumeChanger/CostumeChanger';

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>COSTUMES</h1>
          <hr/>
        </header>
        <CostumeChanger />
      </main>
    );
  }
}

export default App;
