import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navigation/Navbar';
import { ApplicationWrapper } from "./components/UI/Layouts";
import './App.css';

const Home = lazy(() => import('./components/Pages/Home/Home'))
const News = lazy(() => import('./components/Pages/News/News'))
const Todo = lazy(() => import('./components/Pages/Todo/Todo'))
const Download = lazy(() => import('./components/Pages/Download/Download'))

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ApplicationWrapper>
          <Navbar />
          <Suspense fallback={<div>Loading ...</div>}>
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route exact path="/news" component={() => <News />} />
              <Route exact path="/todo" component={() => <Todo />} />
              <Route exact path="/download" component={() => <Download />} />
            </Switch>
          </Suspense>
        </ApplicationWrapper>
      </React.Fragment>
    );
  }
}

export default App;
