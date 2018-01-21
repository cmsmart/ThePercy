import React from 'react';

const mapNameToBibTable = (headings) => (
    <tr>
        {
            headings.map((heading, index) => (
                <th key={index[1]}>{heading}</th>
            ))
        }
    </tr>
)

const mapDataToNameTable = (data) => (
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

export const BibLegendList = (props) => {
    const classes = `${props.classname} table table-hover table-responsive`;
    return (
        <div className="outer-wrapper">
            <h2>Bib Numbers</h2>
            <table className={ classes } >
                <thead>
                    {mapNameToBibTable(props.headings)}
                </thead>
                <tbody>
                    {props.data && mapDataToNameTable(props.data)}
                </tbody>
            </table>
        </div>
    )
}