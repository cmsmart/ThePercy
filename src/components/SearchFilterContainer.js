import React, { Component } from 'react'

const generateYearsArray = () => {
    let years = []
    for (let i = 2000; i <= (new Date()).getFullYear(); i++) {
        years.push(i)
    }
    return years
}

export default class SearchFilterContainer extends Component {
    
    state = {
        year: null,
        race: null,
        searchQuery: null,
    }

    render() {

        const years = generateYearsArray()
        const races = ['Percy', 'Percy Junior']
        
        return (
            <div>
                <p>SearchFilter</p>
            </div>
        )   
    }
}