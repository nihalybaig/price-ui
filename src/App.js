import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetPrices from './components/GetPrices';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetPrices/>
      </div>
    );
  }
}
export default App;