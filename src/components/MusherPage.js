import React, { Component } from 'react';
import MusherHistoryChart from '../components/MusherRaceHistory';
import MusherLineChart from './MusherLineChart';
import { getMushers, getMusher } from '../api/mushers';

class MusherPage extends Component {
  state = {
    musher_id: this.props.match.params.id,
    mushers: {},
    musher: ''
  };

  componentDidMount() {
    getMushers()
    .then(res => {
      this.setState({ mushers: res })
    }).then(() => {
      let filteredMushers = this.state.mushers.filter(musher => (
        musher.musher_id === this.state.musher_id
      )
    )
    console.log(filteredMushers)
    this.setState({ musher: filteredMushers })
    console.log('musher state', this.state.musher)
    })
  }


  render() {
    return (
      <div className="musher-page">
        <h1>{
          this.state.musher[0] &&
          this.state.musher[0].musher}</h1>
        <MusherHistoryChart />
        <MusherLineChart />
      </div>
    );
  }
}

export default MusherPage