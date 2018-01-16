import React, { Component } from 'react'

import { getPastMushers } from '../api/pastmushers';

import { compareObjectValues } from '../utils/compareObjectValues'

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

const tallyKeyCount = (data, key) => {
  let sortedArray = data
  let countArray = []
  sortedArray.map((musher) => {
    if (countArray.some((object) => (object.name === musher.musher))) {
      countArray.forEach((object) => {
        if (object.name === musher.musher) {
          return object[key]++
        }
      })
    }
    else {
      countArray = [ ...countArray, { name: musher.musher, [key]: 1 } ]
    }
  })
  return countArray = countArray.slice().sort(compareObjectValues([key], 'desc'))
}

const getTopFiveRaces = (data) => {
  let countArray = tallyKeyCount(data, 'races').slice(0, 5)
  return countArray
}

const getTopFiveWins = (data) => {
  let filteredArray = data.filter((data) => (data.standing === '1'))
  let countArray = tallyKeyCount(filteredArray, 'wins').slice(0, 5)
  return countArray
}

export default class StatisticsPage extends Component {

  state = {
    mushers: []
  }

  componentDidMount() {
    getPastMushers().then((res) => {
      this.setState({ mushers: res })
    }).then(() => {
      console.log('Top Five Races', getTopFiveRaces(this.state.mushers))
      console.log('Top Five Races', getTopFiveWins(this.state.mushers))
    })
  }
  
  render() {
    return (
    <div className='statistics-page'>
      <p>Statistics Page</p>
    </div>
    )
  }
}