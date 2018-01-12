import React, { Component } from 'react'
import ProfileCard from './ProfileCard';
import SimpleBarChart from '../components/MusherRaceHistory'
import { SearchFilterContainer } from "./SearchFilterContainer";
import { getMushers } from "../api/mushers";

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
  
  render() {
    const { searchResults } = this.state

    console.log(this.state.searchResults)
    return <div className="mushers-page">
        <p>Mushers Page</p>
        <SearchFilterContainer {...this.state} handleSearchQuery={this.handleSearchQuery} />
        <div className="field">
          <h2>The Field</h2>
          <div className="myCards">
            {searchResults.map(result => {
              const imageAddress = result.profile_image.uri.split("//")
              const image = imageAddress[1]
              return <ProfileCard name={result.musher} src={image} />;
            })}
          </div>
        </div>
        <SimpleBarChart />
      </div>;
  }
}


