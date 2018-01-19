import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
