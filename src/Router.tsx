import React from 'react';
import Navbar from "./components/Navbar";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return(
  <Router>
    <Navbar/>
    <Switch>
      <Route exact path = "/home" render = {(props) => <Home {...props}/>}/>
      <Redirect exact from = "/" to = "/home"/>
    </Switch>
  </Router>
  )
}

export default App;
