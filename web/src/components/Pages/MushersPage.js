import React, { Component } from 'react'

import { getMushers } from '../../api/mushers'

import { Button } from '../Button';
import { Dropdown } from '../Dropdown'
import { MushersContainer } from '../MushersContainer/index'
import { Searchbar } from '../Searchbar'

import { generateYears } from '../../utils/generateYears'

export default class MushersPage extends Component {
    state = {
        year: 'Year',
        race: 'Race',
        searchQuery: null
    }
    
    handleYearSelection = (year) => {
        this.setState({ year: year })
    }
    
    handleRaceSelection = (race) => {
        this.setState({ race: race })
    }
    
    handleSearchQuery = (query) => {
        this.setState({ searchQuery: query })
    }

    handleClearFilter = () => {
        this.setState({ year: 'Year', race: 'Race', searchQuery: null})
    }

    componentDidMount = () => {
        getMushers().then((res) => 
            this.setState({ mushers: res })
        )
    }
  
    render = () => {
        return (
            !!this.state.mushers && 
            <div className='mushers-page'>
                <div className='searchFilter'>
                    <Dropdown data={['Year', ...generateYears(2012)]} handleSelection={this.handleYearSelection} />
                    <Dropdown data={['Race', 'Percy', 'Percy Junior']} handleSelection={this.handleRaceSelection} />
                    <Searchbar handleSearchQuery={this.handleSearchQuery}/>
                    <Button handleClick={this.handleClearFilter} >Clear</Button>
                </div>
                <MushersContainer {...this.state} />
            </div>
        )
    }
}


