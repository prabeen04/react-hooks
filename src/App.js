import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navigation/Navbar';
import Home from "./components/Pages/Home/Home";
import { ApplicationWrapper } from "./components/UI/Layouts";
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ApplicationWrapper>
          <Navbar />
          <Suspense>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Suspense>
        </ApplicationWrapper>
      </React.Fragment>
    );
  }
}

export default App;
