import React, { Component } from 'react';
import CounterHook from './components/CounterHook';
import Navbar from './components/Navigation/Navbar';
import Home from "./components/Pages/Home/Home";
import { ApplicationWrapper, FlexContainer } from "./components/UI/Layouts";
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ApplicationWrapper>
          <Navbar />
          <Home />
        </ApplicationWrapper>
      </React.Fragment>
    );
  }
}

export default App;
