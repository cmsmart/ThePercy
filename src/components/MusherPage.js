import React, { Component } from 'react';
import MusherHistoryChart from '../components/MusherRaceHistory';
import MusherLineChart from './MusherLineChart';
import { getMushers, getMusher } from '../api/mushers';
import ProfileCard from './ProfileCard';
import LineChartData from './LineChartData';

class MusherPage extends Component {
  state = {
    musher_id: this.props.match.params.id,
    musher: null,
    mushers: {},
  };

  componentDidMount() {
    getMusher(this.state.musher_id)
    .then(res => {
      this.setState({ musher: res[0] })
      
    })
    .then(() => {
      console.log(this.state.musher)
    })
    // getMushers()
    // .then(res => {
    //   this.setState({ mushers: res })
    // }).then(() => {
    //   let filteredMushers = this.state.mushers.filter(musher => (
    //     musher.musher_id === this.state.musher_id
    //   )
    // )
    // console.log(filteredMushers)
    // this.setState({ musher: filteredMushers })
    // console.log('musher state', this.state.musher)
    // })
  }
  getImageAddress(musher) {
    const imageAddress = musher.profile_image.uri.split("//"); 
    const image = imageAddress[1];
    return image
  }


  render() {
    const { musher, musher_id } = this.state;
    
    return (
    <div className="musher-page">
        { !!this.state.musher &&
        <div>
        <h1>{musher.musher}</h1>
        <div className="field">
          <ProfileCard src={ this.getImageAddress(musher) } />
        </div>
        </div>
      }
        <LineChartData {...this.props} />
        <MusherHistoryChart />
      </div>
)
}
}

export default MusherPage