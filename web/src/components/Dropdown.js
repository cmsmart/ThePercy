import React from 'react'

const mapDataToOptions = (data) => {
    return (
        data.map((datum, index) => (
            <option key={index} value={`${datum}`}>{`${datum}`}</option>
        ))
    )
}

export const Dropdown = (props) => {
    return (
        <select onChange={(event) => {props.handleSelection(event.target.value)}}>
            {mapDataToOptions(props.data)}
        </select>
    )
}