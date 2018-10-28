import React, { Component } from 'react';
import CounterHook from './components/CounterHook';
import Navbar from './components/Navigation/Navbar';
import Unsplash from "./components/Pages/Unsplash";
import { ApplicationWrapper, FlexContainer } from "./components/UI/Layouts";
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ApplicationWrapper>
          <Navbar />
          <CounterHook />
          <FlexContainer style={{ justifyContent: 'space-evenly'}}>
            <Unsplash />
            <Unsplash />
            <Unsplash />
          </FlexContainer>
        </ApplicationWrapper>
      </React.Fragment>
    );
  }
}

export default App;
