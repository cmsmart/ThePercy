import React from 'react';

const musherBibHeadings = ['Bib', 'Name']

const mapNameToBibList = (headings) => (
    <tr>
        {
            musherBibHeadings.map((headings, index) => (
                <th key={index[1]}>{headings}</th>
            ))
        }
    </tr>
)

const mapDataToBibList = (data) => (
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
    return (
        <table className={ `${props.classname} table table-hover table-responsive` } >
            <thead>
                <tr>{mapNameToBibList(props.headings)}</tr>
            </thead>
            <tbody>
                {props.data && mapDataToBibList(props.data)}
            </tbody>
        </table>
    )
}
