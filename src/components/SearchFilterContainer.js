import React from 'react'
import { Dropdown } from './Dropdown';
import { Searchbar } from './Searchbar';

const generateYearsArray = () => {
    let years = []
    for (let i = 2000; i <= (new Date()).getFullYear(); i++) {
        years.push(i)
    }
    years.push('Year')
    return years
}

export const SearchFilterContainer = (props) => { 

    const years = generateYearsArray().reverse()
    const races = ['Race', 'Percy', 'Percy Junior']
    
    return (
        <div className="searchFilter">
            <p>SearchFilter</p>
            <Dropdown data={years} handleSelection={props.handleYearSelection} />
            <Dropdown data={races} handleSelection={props.handleRaceSelection} />
            <Searchbar {...props} />
        </div>
    )   
}