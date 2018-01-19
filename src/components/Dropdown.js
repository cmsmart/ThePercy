import React from 'react'

const mapDataToOptions = (data) => (
    console.log('Object', Object.keys(data)),
    Object.keys(data).map((datum, index) => (
        <option key={index} value={`${data[datum]}`}>{`${datum}`}</option>
    ))
)

export const Dropdown = (props) => {
    return (
        <select onChange={(event) => {props.handleSelection(event.target.value)}}>
            {mapDataToOptions(props.data)}
        </select>
    )
}