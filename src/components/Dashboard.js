import React, { Component } from 'react'
import ProgressBarChart from '../components/ProgressBarChart'
import DashboardLineChart from '../components/DashboardLineChart'

import { getUpdates } from '../api/updates'

import Timer from '../containers/Timer'

import { Table } from './Table'

const headings = ['Status', 'Name', 'Bib', 'Start', 'Forty Mile In', 'Forty Mile Out', 'Eagle In', 'Eagle Out', 'Forty Mile In', 'Forty Mile Out', 'Finish', 'Total Run Time']

export default class Dashboard extends Component {

  state = {
    data: null
  }

  componentDidMount() {
    getUpdates().then((res) => {
      this.setState({ data: res })
    })
  }

  generateTableData(data) {
    let tableData = {}
    tableData = data.map((datum) => {
      return datum = { 
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
    })
    return tableData
  }

  render() {
    !!this.state.data && console.log(this.generateTableData(this.state.data))
    return (
      <main className='dashboard'>
          <Timer />

          <ProgressBarChart
            title='Progress Bar Chart'
          />

            <DashboardLineChart
            title='Race Progress Chart'
          />

        <p>Real Table</p>
        {!!this.state.data && <Table data={this.generateTableData(this.state.data)} classname={'live-data'} headings={headings} />}

      </main>
    )
  }
}


