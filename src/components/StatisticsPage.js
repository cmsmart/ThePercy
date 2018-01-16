import React, { Component } from 'react'
import WinningTimesChart from './WinningTimes'
import { compareObjectValues } from '../utils/compareObjectValues'

const tallyRaceCount = (data) => {
  let sortedArray = data.slice().sort(compareObjectValues('musher'))
  let countArray = []
  sortedArray.map((musher) => {
    if (countArray.some((object) => (object.name === musher.musher))) {
      countArray.forEach((object) => {
        if (object.name === musher.musher) {
          return object.race++
        }
      })
    }
    else {
      countArray = [ ...countArray, { name: musher.musher, race: 1 } ]
    }
  })
  return countArray
}

export default class StatisticsPage extends Component {
  render() {
    return (
    <div className='statistics-page'>
      <p>Statistics Page</p>
      <WinningTimesChart />
    </div>
    )
  }
}