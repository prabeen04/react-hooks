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
            <Unsplash url='https://source.unsplash.com/random/4000x2000'/>
            <Unsplash url='https://source.unsplash.com/random/3000x2000' />
            <Unsplash url='https://source.unsplash.com/random/4000x2001' />
          </FlexContainer>
        </ApplicationWrapper>
      </React.Fragment>
    );
  }
}

export default App;
