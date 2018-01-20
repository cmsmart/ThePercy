import React, { Component } from 'react'

import { getMusherByID } from '../api/mushers'

import { InfoContainer } from '../components/InfoContainer'
import LineChartData from '../components/LineChartData'
import MusherHistoryChart from '../components/MusherRaceHistory'

export default class MusherPage extends Component {
    state = {
        musher: null
    }

    componentDidMount = () => {
        getMusherByID(this.props.match.params.id).then(res => {
            this.setState({ musher: res[0] })
        })
    }

    render = () => {
        return (
            <div className="musher-page">
                { !!this.state.musher &&
                <div>
                    <h1>{this.state.musher.musher}</h1>
                    <InfoContainer src={this.state.musher.profile_image} residence={this.state.musher.residence} />
                </div> }
                <LineChartData />
                <MusherHistoryChart />
            </div>
        )
    }
}