import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Dashboard } from '../components/Dashboard'
import { Historical } from '../components/Historical'
import { MapPage } from '../components/MapPage'
import { MushersPage } from '../components/MushersPage'
import { PrimaryLayout } from '../components/PrimaryLayout'
import { StatisticsPage } from '../components/StatisticsPage'


class App extends Component {

  state = {
    data: {
      updates: {
        update1: {
          id: 1,
          name: 'billy',
          num1: 2,
          num2: 3,
          num3: 4
        },
        update2: {
          id: 10,
          name: 'mandy',
          num1: 20,
          num2: 30,
          num3: 40
        },
        update3: {
          id: 100,
          name: 'grim',
          num1: 200,
          num2: 300,
          num3: 400
        },
        update4: {
          id: 1000,
          name: 'cynthia',
          num1: 2000,
          num2: 3000,
          num3: 4000
        },
        update5: {
          id: 10000,
          name: 'thomas',
          num1: 20000,
          num2: 30000,
          num3: 40000
        }
      },
      races: {
        race1: {
          name: 'Josh',
          start: '1:20:00',
          stop: '2:45:30'
        },
        race2: {
          name: 'Rachel',
          start: '32:30',
          stop: '1:05:00'
        },
        race3: {
          name: 'Alex',
          start: '45:00',
          stop: '1:30:15'
        },
        race4: {
          name: 'Andrea',
          start: '1:10:30',
          stop: '3:25:00'
        },
        race5: {
          name: 'David',
          start: '15:30',
          stop: '50:45'
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <PrimaryLayout />
        <Router>
          <Switch>
            <Route path='/tracker' component={MapPage}/>
            <Route path='/dashboard' render={() => (
              <Dashboard {...this.state.data} />
            )} />
            <Route path='/pastraces' render={() => (
              <Historical {...this.state.data} />
            )} />
            <Route path='/statistics' component={StatisticsPage} />
            <Route path='/mushers' component={MushersPage} />
            <Redirect to='/tracker'  />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
