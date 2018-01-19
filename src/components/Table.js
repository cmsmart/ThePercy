import React from 'react';

const mapHeadingsToTable = (headings) => (
    <tr>
        {
            headings.map((heading, index) => (
                <th key={index}>{heading}</th>
            ))
        }
    </tr>
)

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
    const classes = `${props.classname} table table-hover table-condensed table-responsive`
    console.log('table props', this.props)
    return (
        <div className="outer-wrapper">
            <h2>Race Updates</h2>
            <table className={ classes } >
                <thead>
                    {mapHeadingsToTable(props.headings)}
                </thead>
                <tbody>
                    {props.data && mapDataToTable(props.data)}
                </tbody>
            </table>
        </div>
    )
}