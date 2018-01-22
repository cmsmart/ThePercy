import React, { Component } from 'react'

import { getMusherByID } from '../../api/mushers'
import { getPastMushers } from '../../api/pastmushers'

import { InfoContainer } from '../InfoContainer'
import MusherLineChart from '../Charts/MusherLineChart'
import { MusherHistoryChart } from '../Charts/MusherHistoryChart'

import { generateData } from "../../utils/generateLineChartData";
import { getRaceDataByMusher } from "../../api/races";

export default class MusherPage extends Component {
    state = {
        musher: null,
        pastData: null,
        raceData: null
    }

    componentDidMount = () => {
        getMusherByID(this.props.match.params.id).then((res) => {
            this.setState({ musher: res[0] })
        })
        getPastMushers().then((res) => {
            this.setState({ pastData: res })
        })
        getRaceDataByMusher(this.props.match.params.id).then((res) => {
            this.setState({ raceData: res })
        })
    }

    render = () => {
        !!this.state.pastData && console.log(
            this.state.pastData.filter((datum) => datum.musher_id === this.props.match.params.id).slice(-1)[0].year
        )
        return (
            !!this.state.musher && !!this.state.pastData &&
            <div className="musher-page">
                <div>
                    <h1>{this.state.musher.musher}</h1>
                    <InfoContainer src={this.state.musher.profile_image} residence={this.state.musher.residence} />
                </div>
            {!!this.state.raceData &&
                <div>
                <MusherLineChart {...this.state.raceData}/>
                {console.log(this.state.raceData)}
                </div>
                }

                {this.state.pastData.some((datum) => datum.musher_id === this.props.match.params.id && datum.race === 'Percy') && <MusherHistoryChart  colour={'#70a494'} colour_win={'#b4c8a8'}  pastData={this.state.pastData.filter((datum) => datum.race === 'Percy')} year={parseInt(this.state.pastData.filter((datum) => datum.musher_id === this.props.match.params.id).slice(-1)[0].year, 10)} id={this.props.match.params.id}>Win Times - Percy</MusherHistoryChart>}

                {this.state.pastData.some((datum) => datum.musher_id === this.props.match.params.id && datum.race === 'Percy Junior') && <MusherHistoryChart colour={'#de8a5a'} colour_win={'#edbb8a'}  pastData={this.state.pastData.filter((datum) => datum.race === 'Percy Junior')} year={parseInt(this.state.pastData.filter((datum) => datum.musher_id === this.props.match.params.id).slice(-1)[0].year, 10)} id={this.props.match.params.id}>Win Times - Percy Junior</MusherHistoryChart>}
            </div>
        )
    }
}