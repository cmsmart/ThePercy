import React, { Fragment } from 'react'
import moment from 'moment'

const formatTimeRemaining = (time) => {
    let durationInSeconds = moment.duration(time, 's')
    let formattedTimeRemaining = `${Math.floor(durationInSeconds.asDays())}d ${durationInSeconds.hours()}h ${durationInSeconds.minutes()}m ${durationInSeconds.seconds()}s`
    return formattedTimeRemaining
}

export const Timer = (props) => (
    <Fragment>
        <h4>Race Start</h4>
        <p>{formatTimeRemaining(props.timeRemaining)}</p>
    </Fragment>
)