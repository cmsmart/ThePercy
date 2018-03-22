import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import CurrentRacePage  from '../Pages/CurrentRacePage'
import { Header } from '../Header/index'
import PastRacesPage from '../Pages/PastRacesPage'
import MusherPage from '../Pages/MusherPage'
import MushersPage from '../Pages/MushersPage'
import StatisticsPage from '../Pages/StatisticsPage'

export const PrimaryLayout = (props) => {
    return (
        <div className='main-container'>
            <Header />
            <Switch>
                {/* <Route path='/tracker' component={MapPage}/> */}
                <Route path='/currentrace' component={CurrentRacePage} />
                <Route path='/pastraces' component= {PastRacesPage} />
                <Route path='/statistics' component={StatisticsPage} />
                <Route path='/mushers/:id' component={MusherPage} />
                <Route path='/mushers' component={MushersPage} />
                <Redirect to='/currentrace'  />
            </Switch>
        </div>
    )
}