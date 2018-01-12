import React, { Component } from 'react'
import { SearchFilterContainer } from './SearchFilterContainer'

import { getMushers } from '../api/mushers';

export default class  MushersPage extends Component {
  
  state = {
    year: null,
    race: null,
    searchQuery: null,
    searchResults: []
  }
  
  handleSearchQuery = (query) => {
    this.setState({ searchQuery: query })
  }

  displaySearchResults = (searchResults) => {
    
  }
  
  componentDidMount() {
    getMushers()
      .then((res) => 
      this.setState({searchResults: res})
    )
  }
  
  componentDidUpdate() {
    console.log(this.state)
  }
  
  componentWillUpdate(nextProps, nextState) {

  }
  
  render() {
    console.log(this.state)
    return (
      <div className='mushers-page'>
        <p>Mushers Page</p>
        <SearchFilterContainer {...this.state} handleSearchQuery={this.handleSearchQuery} />
      </div>
    )
  }
}