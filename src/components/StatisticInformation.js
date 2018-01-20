import React, {Fragment} from 'react'

const generateListItems = (data, id, value) => (
    <ul>
        {
            data.map((datum, index) => (
                <li key={index}>
                    <span>{datum[id]}</span> |
                    <span>{datum[value]}</span>
                    {!!datum.year && <Fragment> | <span>{datum.year}</span></Fragment>}
                </li>
            ))
        }
    </ul>
)

export const StatisticInformation = (props) => {
    return (
        <div>
            {generateListItems(props.data, props.id, props.value)}
        </div>
    )
}