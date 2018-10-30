import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navigation/Navbar';
import { ApplicationWrapper } from "./components/UI/Layouts";
import './App.css';

const Home = lazy(() => import('./components/Pages/Home/Home'))

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ApplicationWrapper>
          <Navbar />
          <Suspense fallback={<div>Loading ...</div>}>
            <Switch>
              <Route exact path="/" component={() => <Home/>} />
            </Switch>
          </Suspense>
        </ApplicationWrapper>
      </React.Fragment>
    );
  }
}

export default App;
