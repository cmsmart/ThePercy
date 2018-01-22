import React from 'react'
import { Table } from './Table';

import { filterData } from '../../utils/filterData'

const headings = [
    "Status",
    "Name",
    "Bib",
    "Start",
    "Fortymile In",
    "Fortymile Out",
    "Eagle In",
    "Eagle Out",
    "Fortymile In",
    "Fortymile Out",
    "Finish",
    "Total Run Time"
]

const generateTableData = (data) => {
    let tableData = data.map((datum) => (
        datum = { 
            status: datum.status,
            musher: <a href={`/mushers/${datum.musher_id}`}> { datum.musher} </a>,
            bib: datum.bib, 
            chk_start: datum.chk_start, 
            chk_fm_ob_in: datum.chk_fm_ob_in, 
            chk_fm_ob_out: datum.chk_fm_ob_out,
            chk_eag_in: datum.chk_eag_in,
            chk_eag_out: datum.chk_eag_out,
            chk_fm_ib_in: datum.chk_fm_ib_in,
            chk_fm_ib_out: datum.chk_fm_ib_out,
            chk_finish: datum.chk_finish,
            run_time: datum.run_time
        }
    ))
    return tableData
}

export const TableContainer = (props) => {
    return (
        <div className="table-container">
            <h2>{props.children}</h2>
            <Table tableClass={props.tableClass} data={generateTableData(filterData(props.tableData, props.year, props.race))} headings={headings} />
        </div>
    )
}