import React, { Component } from 'react';
import { getMushers } from '../api/mushers'
import { Results } from './Results'
import { SearchFilterContainer } from './SearchFilterContainer'
import LineChartData from './LineChartData';

export default class  MushersPage extends Component {
  state = {
    year: 'Year',
    race: 'Race',
    searchQuery: null,
    data: []
  }
  
  handleSearchQuery = (query) => {
    this.setState({ searchQuery: query })
  }

  handleYearSelection = (year) => {
    this.setState({ year: year })
  }

  handleRaceSelection = (race) => {
    this.setState({ race: race })
  }

  componentDidMount() {
    getMushers()
      .then((res) => 
      this.setState({ data: res }))
  }
  
  render() {
    console.log(this.state)
    return (
      <div className='mushers-page'>
        <p>Mushers Page</p>
        <SearchFilterContainer handleSearchQuery={this.handleSearchQuery} handleYearSelection={this.handleYearSelection} handleRaceSelection={this.handleRaceSelection} />
        <Results {...this.state} />
      </div>
    )
  }
}


