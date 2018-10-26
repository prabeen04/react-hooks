import React, { Component } from 'react';
import CounterHook from './components/CounterHook'
import Navbar from './components/Navigation/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <CounterHook />
      </React.Fragment>
    );
  }
}

export default App;
