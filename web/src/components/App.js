import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "../styles/App.css"

import { PrimaryLayout } from './Layouts/PrimaryLayout'

import ReactGA from 'react-ga';

ReactGA.initialize('UA-84813849-5')

export function fireTracking(nextState) {

    const { pathname } = nextState.location // this gives you the next URL

     ReactGA.pageview(pathname)

   }

export default class App extends Component {
    render = () => {
        return (
            <div className="container">
                <Router>
                    <Route path='/' onEnter={ fireTracking } component={PrimaryLayout} />
                </Router>
            </div>
        )
    }
}
