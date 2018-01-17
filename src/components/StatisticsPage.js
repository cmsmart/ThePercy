import React, { Component } from 'react'

import { getPastMushers } from '../api/pastmushers'

import WinningTimesChart from './WinningTimesChart'

import { compareObjectValues } from '../utils/compareObjectValues'

const tallyKeyCount = (data, key) => {
  let countArray = []
  data.forEach((musher) => {
    if (countArray.some((object) => (object.name === musher.musher))) {
      countArray.forEach((object) => {
        if (object.name === musher.musher) {
          return object.race++
        }
      })
    }
    else {
      return countArray = [ ...countArray, { name: musher.musher, race: 1 } ]
    }
  })
  return countArray = countArray.slice().sort(compareObjectValues([key], 'desc'))
}

const getTopRaces = (data) => {
  let countArray = tallyKeyCount(data, 'races').slice(0, 5)
  return countArray
}

const getTopWins = (data) => {
  let filteredArray = data.filter((data) => (data.standing === '1'))
  let countArray = tallyKeyCount(filteredArray, 'wins').slice(0, 5)
  return countArray
}

const getTopTimes = (data, race) => {
  let filteredArray = data.filter((data) => (data.standing === '1' && data.race === `${race}`))
  filteredArray = filteredArray.slice().sort(compareObjectValues('run_time'))
  return filteredArray = filteredArray.slice(0, 5)
}

export default class StatisticsPage extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    getPastMushers().then((res) => {
      this.setState({ data: res })
    }).then(() => {
      console.log(getTopRaces(this.state.data))
      console.log(getTopWins(this.state.data))
      console.log(getTopTimes(this.state.data, 'Percy'))
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