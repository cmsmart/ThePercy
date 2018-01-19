import React, { Component } from 'react';
import MusherHistoryChart from '../components/MusherRaceHistory';
import MusherLineChart from './MusherLineChart';
import { getMushers, getMusherByID } from '../api/mushers';
import InfoContainer from './InfoContainer';
import LineChartData from './LineChartData';

class MusherPage extends Component {
  state = {
    musher_id: this.props.match.params.id,
    musher: null,
    mushers: {},
  };

  componentDidMount() {
    getMusherByID(this.state.musher_id)
    .then(res => {
      this.setState({ musher: res[0] })
    })
  }

  render() {
    const { musher, musher_id } = this.state;
    return (
      <div className="musher-page">
        { !!this.state.musher &&
        <div>
        <h1>{musher.musher}</h1>
          <InfoContainer src={musher.profile_image}
          residence={musher.residence}
          >
          </InfoContainer>
        </div>
      }
        <LineChartData {...this.props} />
        <MusherHistoryChart />
      </div>
)
}
}

export default MusherPage