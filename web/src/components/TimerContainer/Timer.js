import React, { Fragment } from 'react'
import moment from 'moment'

const formatTimeRemaining = (time) => {
    let durationInSeconds = moment.duration(time, 's')
    let formattedTimeRemaining = `${Math.floor(durationInSeconds.asDays())}d ${durationInSeconds.hours()}h ${durationInSeconds.minutes()}m ${durationInSeconds.seconds()}s`
    return formattedTimeRemaining
}

export const Timer = (props) => (
    <Fragment>
        {formatTimeRemaining(props.timeRemaining)}
    </Fragment>
)