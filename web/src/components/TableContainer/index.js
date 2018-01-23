import React from 'react'
import { Table } from './Table';

import { filterData } from '../../utils/filterData'

const headings = [
    "Standing",
    "Bib",
    "Name",
    "Start",
    "Fortymile In",
    "Fortymile Out",
    "Eagle In",
    "Eagle Out",
    "Fortymile In",
    "Fortymile Out",
    "Finish",
    "Total Run Time",
    "Status"
]

const generateTableData = (data) => {
    let tableData = data.map((datum) => (
        datum = { 
            standing: datum.standing,
            bib: datum.bib, 
            musher: <a href={`/mushers/${datum.musher_id}`}>{datum.musher}</a>,
            chk_start: datum.chk_start, 
            chk_fm_ob_in: datum.chk_fm_ob_in, 
            chk_fm_ob_out: datum.chk_fm_ob_out,
            chk_eag_in: datum.chk_eag_in,
            chk_eag_out: datum.chk_eag_out,
            chk_fm_ib_in: datum.chk_fm_ib_in,
            chk_fm_ib_out: datum.chk_fm_ib_out,
            chk_finish: datum.chk_finish,
            run_time: datum.run_time,
            status: datum.status
        }
    ))
    return tableData
}

export const TableContainer = (props) => {
    return (
        <div className="outer-wrapper">
            <h2>{props.children}</h2>
            <div className="table-container">
                <Table tableClass={props.tableClass} data={generateTableData(filterData(props.tableData, props.year, props.race))} headings={headings} />
            </div>
        </div>
    )
}