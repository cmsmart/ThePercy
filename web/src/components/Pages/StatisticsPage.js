import React, { Component } from 'react'

import { getPastMushers } from '../../api/pastmushers'

import WeatherChart from '../Charts/WeatherChart'
import { WinningTimesBarChart } from '../Charts/WinningTimesBarChart'

import { StatisticInformation } from '../StatisticInformation'

import { compareObjectValues } from '../../utils/compareObjectValues'
import { deduplicateAndCountObjectByKey } from '../../utils/deduplicateAndCountObjectByKey'
import LoadScreen from '../LoadScreen';

const getTopRaces = (data) => {
    let countArray = deduplicateAndCountObjectByKey(data.filter((data) => (data.race === 'Percy')), 'musher', 'races', 'name')
    .sort(compareObjectValues('races', 'desc'))
    .slice(0, 10)
    return countArray
}

const getTopWins = (data) => {
    let countArray = deduplicateAndCountObjectByKey(data.filter((data) => (data.standing === '1' && data.race === 'Percy')), 'musher', 'wins', 'name')
    .sort(compareObjectValues('wins', 'desc'))
    .slice(0, 10)
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
        data: null
    }

    componentDidMount = () => {
        getPastMushers().then((res) => {
            this.setState({ data: res })
        })
    }
  
    render = () => {
        return (
            !!this.state.data ? (
            <div className='statistics-page'>
                <div className ="statistic-wrapper">
                    <section>
                        <h2>Percy Veterans</h2>
                        <p>Most races run</p>
                        <StatisticInformation data={getTopRaces(this.state.data)} id='name' value='races' />
                    </section>
                    <section>
                        <h2>Percy Champions</h2>
                        <p>Most races won</p>
                        <StatisticInformation data={getTopWins(this.state.data)} id='name' value='wins' />
                    </section>
                    <section>
                        <h2>Percy Speedsters</h2>
                        <p>Fastest win times</p>
                        <StatisticInformation data={getTopTimes(this.state.data, 'Percy')} id='name' value='time' />
                    </section>
                </div>
                <WinningTimesBarChart colour={'#70a494'} year={1981} data={this.state.data.filter((datum) => datum.standing === '1' && datum.race === 'Percy')}>Win Times - Percy</WinningTimesBarChart>
                <WinningTimesBarChart colour={'#DE8A5A'} year={2002} data={this.state.data.filter((datum) => datum.standing === '1' && datum.race === 'Percy Junior')}>Win Times - Percy Junior</WinningTimesBarChart>
                <WeatherChart />
            </div> ):(
                <LoadScreen />
            )
        )
    }
}