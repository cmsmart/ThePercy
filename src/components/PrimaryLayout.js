import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Header } from '../components/Header/index'
import { Dashboard } from '../components/Dashboard'
import { Historical } from '../components/Historical'
import { MapPage } from '../components/MapPage'
import MusherPage from '../components/MusherPage'
import MushersPage from '../components/MushersPage'
import StatisticsPage from '../components/StatisticsPage'

export const PrimaryLayout = (props) => {
  return (
    <div className='main-container'>
      <Header />
      <Switch>
        <Route path='/tracker' component={MapPage}/>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/pastraces' component= {Historical} />
        <Route path='/statistics' component={StatisticsPage} />
        <Route path='/mushers/:id' component={MusherPage} />
        <Route path='/mushers' render={() => (<MushersPage />)} />
        <Redirect to='/tracker'  />
      </Switch>
    </div>
  )
}