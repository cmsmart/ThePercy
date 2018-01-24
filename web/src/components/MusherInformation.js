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
    let compareByStanding = forRace.slice().sort(compareObjectValues('standing'))
    let bestStanding = `${compareByStanding[0].standing} in ${compareByStanding[0].year}`
    let compareByFinishTime = forRace.filter((datum) => (datum.run_time !== ('unknown' || 'scratched'))).sort(compareObjectValues('run_time'))
    let bestFinishTime = `${compareByFinishTime[0].run_time} in ${compareByFinishTime[0].year}`
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
            <h1>{props.children}</h1>
            <Avatar src={props.musher.profile_image} />
            <div className="container">
                <h4>Age: {props.musher.age}</h4>
                {!!props.musher.residence && <h4>Hometown: {props.musher.residence}</h4>}
                {!!dataForMusher.some((datum) => datum.race === 'Percy') && <Fragment>
                    <div className="stats">
                        <h4>The Percy</h4>
                        <ul>
                            <li>Times run: {percyInformation[0]}</li>
                            <li>Best Finishing Position: {percyInformation[1]}</li>
                            <li>Best Finish Time: {percyInformation[2]}</li>
                        </ul>
                    </div>
                </Fragment>}
                {!!dataForMusher.some((datum) => datum.race === 'Percy Junior') && <Fragment>
                    <div className="stats">
                        <h4>Percy Junior</h4>
                        <ul>
                            <li>Times run: {percyJuniorInformation[0]}</li>
                            <li>Best Finishing Position: {percyJuniorInformation[1]}</li>
                            <li>Best Finish Time: {percyJuniorInformation[2]}</li>
                        </ul>
                    </div>
                </Fragment>}
            </div>
        </div>
    )
}