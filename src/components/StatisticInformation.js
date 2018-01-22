import React, {Fragment} from 'react'

const generateListItems = (data, id, value) => (
    <ul>
        {data.map((datum, index) => (
            <li key={index}>
                <span className="top_name">{datum[id]}</span> |
                <span className="top_data">{datum[value]}</span>
                {!!datum.year && 
                <Fragment>
                    &nbsp;hrs in <span>{datum.year}</span>
                </Fragment>}
            </li>
        ))}
    </ul>
)

export const StatisticInformation = (props) => {
    return (
        <div>
            {generateListItems(props.data, props.id, props.value)}
        </div>
    )
}