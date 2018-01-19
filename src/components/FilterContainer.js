import React from 'react'
import { Dropdown } from './Dropdown';

const generateYearsArray = () => {
    let years = []
    for (let i = 2012; i < (new Date()).getFullYear(); i++) {
        years = [ i, ...years ]
    }
    return years
}

export const FilterContainer = (props) => { 
    const years = generateYearsArray()
    const races = ['Race', 'Percy', 'Percy Junior']
    
    return (
        <div className="searchFilter">
            <Dropdown data={years} handleSelection={props.handleYearSelection} />
            <Dropdown data={races} handleSelection={props.handleRaceSelection} />
        </div>
    )   
}