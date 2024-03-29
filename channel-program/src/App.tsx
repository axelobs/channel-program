import React from 'react';
import Home from './components/Home';
import Register from './components/User/Register/index';
import Events from './components/Events';
import Subscription from './components/Subscription';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

import Splash from './components/Splash';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/subscribe" component={Subscription} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;