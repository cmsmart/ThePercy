import React, { Component } from 'react'
import { getMusherByID } from '../../api/mushers'
import { InfoContainer } from '../InfoContainer'
import MusherHistoryChart from '../Charts/MusherRaceHistory'
import MusherLineChart from '../Charts/MusherLineChart';

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
                <MusherLineChart {...this.state.musher}/>
                {/* <LineChartData {...this.state.musher}/> */}
                <MusherHistoryChart />
            </div>
        )
    }
}