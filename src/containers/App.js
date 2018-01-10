import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Dashboard } from '../components/Dashboard'
import { Historical } from '../components/Historical'
import { MapPage } from '../components/MapPage'
import { MushersPage } from '../components/MushersPage'
import { PrimaryLayout } from '../components/PrimaryLayout'
import { StatisticsPage } from '../components/StatisticsPage'

import ProgressBarChart from '../components/ProgressBarChart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimaryLayout />
        <Router>
          <Switch>
            <Route path='/tracker' component={MapPage}/>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/pastraces' component={Historical} />
            <Route path='/statistics' component={StatisticsPage} />
            <Route path='/mushers' component={MushersPage} />
            <Redirect to='/tracker'  />
          </Switch>
        </Router>

        <ProgressBarChart
            title='Progress Bar Chart'
          />
          
      </div>
    );
  }
}

export default App;
