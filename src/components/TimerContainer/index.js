import React, { Component } from 'react'
import moment from 'moment'

import { Timer } from './Timer'

export default class TimerContainer extends Component {
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
            <div className='timer'>
                <h4>Race Start</h4>
                <Timer {...this.state} />
            </div>
        )
    }
}