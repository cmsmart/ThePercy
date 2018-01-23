import React, { Component } from 'react'
import moment from 'moment'

import { Timer } from './Timer'

export default class TimerContainer extends Component {
    state = {
        timeRemaining: moment(1521738000) - moment().unix(), 
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
            <div className='timer'>
                <p>Race Start</p>
                <Timer {...this.state} />
            </div>
        )
    }
}