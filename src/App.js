import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navigation/Navbar';
import { ApplicationWrapper } from "./components/UI/Layouts";
import { NewsContext } from "./context/NewsListContext";
import './App.css';

const Home = lazy(() => import('./components/Pages/Home/Home'))
const News = lazy(() => import('./components/Pages/News/News'))
const Todo = lazy(() => import('./components/Pages/Todo/Todo'))
const Context = lazy(() => import('./components/Pages/Context/Context'))
const Reducer = lazy(() => import('./components/Pages/Reducer/Reducer'))

const App = (props) => {
  const [sources, setSources] = useState([]);

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
      <NewsContext.Provider value={sources}>
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
      </NewsContext.Provider>
    </React.Fragment>
  );
}

export default App;
