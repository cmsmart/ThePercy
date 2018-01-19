import React, { Component } from 'react'

import { getPastMushers } from '../api/pastmushers'

import WinningTimesChart from './WinningTimesChart'
import { StatisticInformation } from './StatisticInformation'
import WeatherChart from './WeatherChart'

import { compareObjectValues } from '../utils/compareObjectValues'
import { deduplicateAndCountObjectByKey } from '../utils/deduplicateAndCountObjectByKey'

const getTopRaces = (data) => {
  let countArray = deduplicateAndCountObjectByKey(data.filter((data) => (data.race === 'Percy')), 'musher', 'races', 'name').sort(compareObjectValues('races', 'desc')).slice(0, 10)
  return countArray
}

const getTopWins = (data) => {
  let countArray = deduplicateAndCountObjectByKey(data.filter((data) => (data.standing === '1' && data.race === 'Percy')), 'musher', 'wins', 'name').sort(compareObjectValues('wins', 'desc')).slice(0, 10)
  return countArray
}

const getTopTimes = (data) => {
  let timesArray = data.filter((data) => (data.standing === '1' && data.race === 'Percy'))
  .sort(compareObjectValues('run_time'))
  .slice(0, 10)
  .map((datum) => (datum = { name: datum.musher, time: datum.run_time, year: datum.year }))
  return timesArray
}

export default class StatisticsPage extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    getPastMushers().then((res) => {
      this.setState({ data: res })
    })
  }
  
  render() {
    return (
    <div className='statistics-page'>
      <div className ="statistic-wrapper">
        <section>
          <h2>Most run</h2>
          <StatisticInformation data={getTopRaces(this.state.data)} id='name' value='races' />
        </section>
        <section>
          <h2>Most won</h2>
          <StatisticInformation data={getTopWins(this.state.data)} id='name' value='wins' />
        </section>
        <section>
          <h2>Fastest run times</h2>
          <StatisticInformation data={getTopTimes(this.state.data, 'Percy')} id='name' value='time' />
        </section>
      </div>
      <WinningTimesChart />
      <WeatherChart />
    </div>
    )
  }
}