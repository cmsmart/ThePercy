import React from 'react'

export const FilterContainer = (props) => { 
    return (
        <div className="searchFilter">
            {props.children}
        </div>
    )   
}