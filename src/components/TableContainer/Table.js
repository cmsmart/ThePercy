import React from 'react';

const mapHeadingsToTable = (headings) => {
    return (
        headings.map((heading, index) => (<th key={index}>{heading}</th>))
    )
}

const mapDataToTable = (data) => (
    Object.keys(data).map((level1, index) => (
        <tr key={index}>
            {
                Object.keys(data[level1]).map((level2, index) => (
                    <td key={index}>{data[level1][level2]}</td>
                ))
            }
        </tr>
    ))
)

export const Table = (props) => {
    return (
        <table className={ `${props.classname} table table-hover table-responsive` } >
            <thead>
                <tr>{mapHeadingsToTable(props.headings)}</tr>
            </thead>
            <tbody>
                {props.data && mapDataToTable(props.data)}
            </tbody>
        </table>
    )
}