import React, { Component } from 'react'
import ProfileCard from './ProfileCard';
import { getMushers } from '../api/mushers'
import { Results } from './Results'
import { SearchFilterContainer } from './SearchFilterContainer'

export default class  MushersPage extends Component {
  state = {
    year: 'Year',
    race: 'Race',
    searchQuery: null,
    mushers: []
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

  filterResults = () => {
    let filteredResults = [...this.state.mushers]
    if (this.state.year !== 'Year') {
      filteredResults = filteredResults.filter((result) => (
        result.year === this.state.year
      ))
    }
    if (this.state.race !== 'Race') {
      filteredResults = filteredResults.filter((result) => (
        result.race === this.state.race
      ))
    }
    if (this.state.searchQuery) {
      filteredResults = filteredResults.filter((result) => (
        new RegExp(this.state.searchQuery).test(result.musher)
      ))
    }
    filteredResults = filteredResults.filter((result, index, self) => {
      return self.map(mapObj => mapObj['musher_id']).indexOf(result['musher_id']) === index
    })
    return filteredResults
  }

  componentDidMount() {
    getMushers()
      .then((res) => 
      this.setState({ mushers: res }))
  }
  
  render() {
    return (
      <div className='mushers-page'>
        <p>Mushers Page</p>
        <SearchFilterContainer handleSearchQuery={this.handleSearchQuery} handleYearSelection={this.handleYearSelection} handleRaceSelection={this.handleRaceSelection} />
        <Results {...this.state} filterResults={this.filterResults} />
      </div>
    )
  }
}


