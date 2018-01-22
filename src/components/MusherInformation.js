import React from 'react'

import { Avatar } from './MushersContainer/Avatar'

import { compareObjectValues } from '../utils/compareObjectValues'
import { deduplicateAndCountObjectByKey } from '../utils/deduplicateAndCountObjectByKey'

const getTopByKeyCount = (data, key, topLimit) => {
    let countArray = deduplicateAndCountObjectByKey(data, 'musher', key, 'name')
    .sort(compareObjectValues(key, 'desc'))
    .slice(0, topLimit)
    return countArray
}

export const MusherInformation = (props) => {
    const dataForMusher = props.pastData.filter((datum) => (datum.musher_id === props.id))

    const forPercy = dataForMusher.filter((datum) => (datum.race === 'Percy'))
    const forPercyJunior = dataForMusher.filter((datum) => (datum.race === 'Percy Junior'))

    const bestFinishTimePercy = forPercy.filter((datum) => (datum.run_time !== ('unknown' || 'scratched'))).sort(compareObjectValues('run_time'))[0].run_time
    const bestFinishTimePercyJunior = forPercyJunior.filter((datum) => (datum.run_time !== ('unknown' || 'scratched'))).sort(compareObjectValues('run_time'))[0].run_time

    const bestStandingPercy = forPercy.slice().sort(compareObjectValues('standing', 'desc'))[0].standing
    const bestStandingPercyJunior = forPercyJunior.slice().sort(compareObjectValues('standing', 'desc'))[0].standing

    const percyRunCount = getTopByKeyCount(forPercy, 'races', 1)[0].races
    const percyJuniorRunCount = getTopByKeyCount(forPercyJunior, 'races', 1)[0].races

    return (
        <div className="info-card">
            <Avatar src={props.musher.profile_image} />
            <div className="container">
                <h4>Age: {}</h4>
                <h4>Hometown: {props.musher.residence}</h4>
                <h4>Times Run (Percy): {percyRunCount}</h4>
                <h4>Best Placing (Percy): {bestStandingPercy}</h4>
                <h4>Best Finish Time (Percy): {bestFinishTimePercy}</h4>
                <h4>Times Run (Percy Junior): {percyJuniorRunCount}</h4>
                <h4>Best Placing (Percy Junior): {bestStandingPercyJunior}</h4>
                <h4>Best Finish Time (Percy Junior): {bestFinishTimePercyJunior}</h4>
            </div>
        </div>
    )
}
