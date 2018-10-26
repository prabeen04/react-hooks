import React, { Component } from 'react';
import CounterHook from './components/CounterHook'
import Navbar from './components/Navigation/Navbar'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CounterHook />
      </div>
    );
  }
}

export default App;
