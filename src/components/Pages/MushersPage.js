import React, { Component } from 'react'

import { getMushers } from '../../api/mushers'

import { Dropdown } from '../FilterContainer/Dropdown'
import { FilterContainer } from '../FilterContainer/index'
import { MushersContainer } from '../MushersContainer/index'
import { Searchbar } from '../FilterContainer/Searchbar'

import { generateYears } from '../../utils/generateYears'
import { Button } from '../FilterContainer/Button';

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
            <div className='mushers-page'>
                <p>Mushers Page</p>
                <FilterContainer>
                    <Dropdown data={['Year', ...generateYears(2012)]} handleSelection={this.handleYearSelection} />
                    <Dropdown data={['Race', 'Percy', 'Percy Junior']} handleSelection={this.handleRaceSelection} />
                    <Searchbar handleSearchQuery={this.handleSearchQuery}/>
                    <Button handleClick={this.handleClearFilter} >Clear</Button>
                </FilterContainer>
                {!!this.state.mushers && <MushersContainer {...this.state} />}
            </div>
        )
    }
}


