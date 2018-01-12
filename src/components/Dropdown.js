import React from 'react'

const mapDataToOptions = (data) => (
    data.map((datum, index) => (
        <option key={index} value={`${datum}`}>{`${datum}`}</option>
    ))
)

export const Dropdown = (props) => {
    return (
        <select>
            {mapDataToOptions(props.data)}
        </select>
    )
}