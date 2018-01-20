import React, { Component } from 'react'
import moment from 'moment'

import { Timer } from '../components/Timer'

export default class Countdown extends Component {
    state = {
        timeRemaining: moment(1521741600) - moment().unix(), 
    }

    tick = () => {
        this.setState({ timeRemaining: this.state.timeRemaining - 1})
        if (this.state.timeRemaining <= 0) {
          clearInterval(this.interval)
        }
    }

    componentDidMount = () => {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount = () => {
        clearInterval(this.interval)
    }

    render = () => {
        return (
            <div className='timer'><Timer {...this.state} /></div>
        )
    }
}