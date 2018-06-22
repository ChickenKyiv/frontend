import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1.js';

let data = ['Apple', 'Orange', 'Banana'];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="fruits">
          {
            data.map(fruit => <Component1 data={fruit} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
