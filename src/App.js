import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navigation/Navbar';
import { ApplicationWrapper } from "./components/UI/Layouts";
import { NewsContext } from "./context/NewsListContext";
import { news_api_url } from "./config/index";
import './App.css';
import AppErrorBoundary from './components/ErrorBoundary/AppErrorBoundary';
import QRCode from './QRCode'
const Home = lazy(() => import('./components/Pages/Home/Home'))
const News = lazy(() => import('./components/Pages/News/News'))
const Todo = lazy(() => import('./components/Pages/Todo/Todo'))
const Context = lazy(() => import('./components/Pages/Context/Context'))
const Reducer = lazy(() => import('./components/Pages/Reducer/Reducer'))
const MyMap = lazy(() => import('./components/Pages/MyMap/MyMap'))
// const Spring = lazy(() => import('./components/Pages/Spring/Spring'))

const App = (props) => {
  const [sources, setSources] = useState([]);
  const [selectedSource, setSelectedSource] = useState('buzzfeed')
  useEffect(() => {
    fetch(`${news_api_url}/sources`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setSources(res.sources)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <React.Fragment>
      <Router>
        <AppErrorBoundary>
          <NewsContext.Provider value={{ sources, selectedSource, setSelectedSource }}>
            <ApplicationWrapper>
              <Navbar />
              <Suspense fallback={<div>Loading ...</div>}>
                <Switch>
                  <Route exact path="/" component={() => <Home />} />
                  <Route exact path="/news" component={() => <News />} />
                  <Route exact path="/todo" component={() => <Todo />} />
                  <Route exact path="/context" component={() => <Context />} />
                  <Route exact path="/reducer" component={() => <Reducer />} />
                  <Route exact path="/map" component={() => <MyMap />} />
                  {/* <Route exact path="/spring" component={() => <Spring />} /> */}
                </Switch>
              </Suspense>
            </ApplicationWrapper>
          </NewsContext.Provider>
        </AppErrorBoundary>
      </Router>
    </React.Fragment>
  );
}

export default App;
