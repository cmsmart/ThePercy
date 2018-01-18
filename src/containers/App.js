import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import "../styles/App.css";

import { PrimaryLayout } from '../components/PrimaryLayout';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route path='/' component={PrimaryLayout} />
        </Router>
      </div>
    );
  }
}

export default App;
