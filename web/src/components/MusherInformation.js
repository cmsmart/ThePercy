import React, { Fragment } from 'react'

import { Avatar } from './MushersContainer/Avatar'

import { compareObjectValues, compareObjectValuesNumeric } from '../utils/compareObjectValues'
import { deduplicateAndCountObjectByKey } from '../utils/deduplicateAndCountObjectByKey'

const getTopByKeyCount = (data, key, topLimit) => {
    let countArray = deduplicateAndCountObjectByKey(data, 'musher', key, 'name')
    .sort(compareObjectValues(key, 'desc'))
    .slice(0, topLimit)
    return countArray
}

const generateInformation = (data, race) => {
    let informationArray = []
    let forRace = data.filter((datum) => (datum.race === race && datum.run_time.toLowerCase() !== 'unknown' && datum.run_time.toLowerCase() !== 'scratched'))
    let sortedStandingData = forRace.slice().sort(compareObjectValuesNumeric('standing'))[0]
    let bestStanding = `${sortedStandingData.standing} in ${sortedStandingData.year}`
    let sortedRunTimeData = forRace.sort(compareObjectValues('run_time'))[0]
    let bestFinishTime = `${sortedRunTimeData.run_time} in ${sortedRunTimeData.year}`
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
                <div>
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