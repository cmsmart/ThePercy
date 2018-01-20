import React, { Component } from 'react'

import { getUpdates } from '../api/updates'
import { getMushers } from '../api/mushers'

import DashboardLineChart from '../components/DashboardLineChart'
import { Field } from '../components/Field'
import ProgressBarChart from '../components/ProgressBarChart'
import { Table } from './Table'

import Countdown from '../containers/Countdown'

export default class Dashboard extends Component {
    state = {
        data: null,
        field: null,
        race: 'Percy',
        year: (new Date()).getFullYear(),
    }
    
    headings = [ 
        'Status', 
        'Name', 
        'Bib', 
        'Start', 
        'Fortymile In', 
        'Fortymile Out', 
        'Eagle In', 
        'Eagle Out', 
        'Fortymile In', 
        'Fortymile Out', 
        'Finish', 
        'Total Run Time' 
    ]
  
    componentDidMount = () => {
        getUpdates().then((res) => {
            this.setState({ data: res })
        })
        getMushers().then((res) => {
            this.setState({ field: res })
        })
    }

    generateTableData = (data) => {
        let tableData = data.map((datum) => (
            datum = { 
                status: datum.status,
                musher: datum.musher,
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

    render = () => {
        return (
            <main className="dashboard">
                <Countdown />
                <ProgressBarChart title="Progress Bar Chart" />
                {!!this.state.field && <Field data={this.state.field.filter((datum) => (datum.year === '2017'))} />}
                <DashboardLineChart title="Race Progress Chart" />
                {!!this.state.data && <Table data={this.generateTableData(this.state.data.filter((datum) => (datum.year === '2017')))} classname={"live-data"} headings={this.headings} />}
            </main>
        )
    }
}


