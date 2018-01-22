import React, { Fragment } from 'react'

import { Avatar } from './MushersContainer/Avatar'

import { compareObjectValues } from '../utils/compareObjectValues'
import { deduplicateAndCountObjectByKey } from '../utils/deduplicateAndCountObjectByKey'

const getTopByKeyCount = (data, key, topLimit) => {
    let countArray = deduplicateAndCountObjectByKey(data, 'musher', key, 'name')
    .sort(compareObjectValues(key, 'desc'))
    .slice(0, topLimit)
    return countArray
}

const generateInformation = (data, race) => {
    let informationArray = []
    let forRace = data.filter((datum) => (datum.race === race))
    let bestStanding = forRace.slice().sort(compareObjectValues('standing', 'desc'))[0].standing
    let bestFinishTime = forRace.filter((datum) => (datum.run_time !== ('unknown' || 'scratched'))).sort(compareObjectValues('run_time'))[0].run_time
    let runCount = getTopByKeyCount(forRace, 'races', 1)[0].races
    return informationArray = [ runCount, bestStanding, bestFinishTime ]
}

export const MusherInformation = (props) => {
    let dataForMusher = props.pastData.filter((datum) => (datum.musher_id === props.id))
    let percyInformation = []
    let percyJuniorInformation = []

    if (!!dataForMusher.some((datum) => datum.race === 'Percy')) {
        percyInformation = generateInformation(dataForMusher, 'Percy')
    }

    if (!!dataForMusher.some((datum) => datum.race === 'Percy Junior')) {
        percyJuniorInformation = generateInformation(dataForMusher, 'Percy Junior')
    }

    return (
        <div className="info-card">
            <Avatar src={props.musher.profile_image} />
            <div className="container">
                <h4>Age: {}</h4>
                {!!props.musher.residence && <h4>Hometown: {props.musher.residence}</h4>}
                {!!dataForMusher.some((datum) => datum.race === 'Percy') && <Fragment>
                    <div>
                        <h4>The Percy</h4>
                        <ul>
                            <li>Times run: {percyInformation[0]}</li>
                            <li>Best Finishing Position: {percyInformation[1]}</li>
                            <li>Best Finish Time: {percyInformation[2]}</li>
                        </ul>
                    </div>
                </Fragment>}
                {!!dataForMusher.some((datum) => datum.race === 'Percy Junior') && <Fragment>
                    <h4>Times Run (Percy Junior): {percyJuniorInformation[0]}</h4>
                    <h4>Best Standing (Percy Junior): {percyJuniorInformation[1]}</h4>
                    <h4>Best Finish Time (Percy Junior): {percyJuniorInformation[2]}</h4>
                </Fragment>}
            </div>
        </div>
    )
}
