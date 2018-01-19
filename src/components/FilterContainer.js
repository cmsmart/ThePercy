import React from 'react'
import { Dropdown } from './Dropdown';

const generateYearsArray = () => {
    let years = []
    for (let i = 2012; i < (new Date()).getFullYear(); i++) {
        years = { [i]: i, ...years }
    }
    return years
}

export const FilterContainer = (props) => { 
    const years = generateYearsArray()
    const races = {'Race': '0', 'Percy': '13', 'Percy Junior': '14'}

    return (
        <div className="searchFilter">
            <Dropdown data={years} handleSelection={props.handleYearSelection} />
            <Dropdown data={races} handleSelection={props.handleRaceSelection} />
        </div>
    )   
}