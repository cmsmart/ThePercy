import React from 'react'
import { Dropdown } from './Dropdown';
import { Searchbar } from './Searchbar';
import { Results } from './Results'

const generateYearsArray = () => {
    let years = []
    for (let i = 2000; i <= (new Date()).getFullYear(); i++) {
        years.push(i)
    }
    return years
}

export const SearchFilterContainer = (props) => { 

    const years = generateYearsArray().reverse()
    const races = ['Percy', 'Percy Junior']
    
    return (
        <div>
            <p>SearchFilter</p>
            <Dropdown data={years} />
            <Dropdown data={races} />
            <Searchbar {...props} />
            <Results {...props} />
        </div>
    )   
}