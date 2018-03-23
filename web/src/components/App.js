import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "../styles/App.css"

import { PrimaryLayout } from './Layouts/PrimaryLayout'

import ReactGA from 'react-ga';

ReactGA.initialize('UA-84813849-5')

ReactGA.pageview(window.location.pathname + window.location.search);

export default class App extends Component {
    render = () => {
        return (
            <div className="container">
                <Router>
                    <Route path='/'  component={PrimaryLayout} />
                </Router>
            </div>
        )
    }
}
