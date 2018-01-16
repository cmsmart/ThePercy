import React, { Component } from 'react'

import { getPastMushers } from '../api/pastmushers';

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

const generateYearsArray = () => {
  let years = []
  for (let i = 2012; i < (new Date()).getFullYear(); i++) {
    years = [ ...years, { year: `${i}` } ]
  }
  return years
}

const generateWinningTimesData = (data) => {
  let filteredArray = data.filter((datum) => datum.standing === '1')
  let years = generateYearsArray()
  
  filteredArray.map((musher) => {
      return years = years.map((year) => {
          if (year.year === musher.year) {
              year = Object.assign({}, year, ...year, { [musher.race]: parseFloat((musher.run_time).replace(/:/gi, '.')) })
          }
          return year
      })
  })
  return years
}

export default class StatisticsPage extends Component {

  state = {
    mushers: null
  }

  componentDidMount() {
    getPastMushers().then((res) => {
      this.setState({ mushers: res })
    // }).then(() => (
    //   console.log(tallyDataCount(this.state.mushers, 'races'))
    // )).then(() => {
    }).then(() => {
      console.log('THIS IS TEST', generateWinningTimesData(this.state.mushers))
    })
  }
  
  render() {
    return (
    <div className='statistics-page'>
      <p>Statistics Page</p>
      <WinningTimesChart />
    </div>
    )
  }
}