import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navigation/Navbar';
import { ApplicationWrapper } from "./components/UI/Layouts";
import './App.css';

const Home = lazy(() => import('./components/Pages/Home/Home'))
const News = lazy(() => import('./components/Pages/News/News'))
const Todo = lazy(() => import('./components/Pages/Todo/Todo'))
const Context = lazy(() => import('./components/Pages/Context/Context'))
const Reducer = lazy(() => import('./components/Pages/Reducer/Reducer'))

const App = (props) => {
  return (
    <React.Fragment>
      <ApplicationWrapper>
        <Navbar />
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/news" component={() => <News />} />
            <Route exact path="/todo" component={() => <Todo />} />
            <Route exact path="/context" component={() => <Context />} />
            <Route exact path="/reducer" component={() => <Reducer />} />
          </Switch>
        </Suspense>
      </ApplicationWrapper>
    </React.Fragment>
  );
}

export default App;
