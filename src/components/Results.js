import React from 'react'

export const Results = (props) => {
    return (
        <div>
            Results
            {props.filterSearchResults(props.mushers).map((musher, index) => (
                <p key={index}>{musher.musher}</p>
            ))}
        </div>
    )
}