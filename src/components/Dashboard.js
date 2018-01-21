import React, { Component } from 'react';
import ProgressBarChart from '../components/ProgressBarChart';
import DashboardLineChart from '../components/DashboardLineChart';
import { getUpdates } from '../api/updates';
import { getMushers } from '../api/mushers';
// import Timer from '../containers/Timer';
import Countdown from '../containers/Countdown';
import { Field } from '../components/Field';
import { Table } from './Table';

const headings = ['Status', 'Name', 'Bib', 'Start', 'Fortymile In', 'Fortymile Out', 'Eagle In', 'Eagle Out', 'Fortymile In', 'Fortymile Out', 'Finish', 'Total Run Time']

export default class Dashboard extends Component {
  state = {
    data: null,
    // year: (new Date()).getFullYear(),
    year: '2017',
    race: 'Percy',
    field: null
  }

  componentDidMount() {
    getUpdates().then((res) => {
      this.setState({ data: res })
    })
    getMushers().then((res) => {
      this.setState({ field: res })
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

  generateProgressBarBibLegend(data) {
    let bibLegend = {}
    bibLegend = data.map((datum) => {
      return datum = {
        musher: datum.musher,
        bib: datum.bib
      }
    })
    return bibLegend
  }

  filterYear = (data) => {
    let filteredData = data.filter((datum) => (
      // datum.year === (new Date()).getFullYear()
      datum.year === "2017"
    ))
    return filteredData
  }

  render() {
    return (
    <main className="dashboard">

        {/* <Timer /> */}
        

        {/*!!this.state.data && <Table data={this.generateProgressBarBibLegend(this.filterYear(this.state.data))} classname={"live-data"} headings={headings} />*/}

        <ProgressBarChart title="Progress Bar Chart" />

        <Countdown />
    
    
        {!!this.state.field &&
        <Field data={this.filterYear(this.state.field)} />
        }
       
        {!!this.state.data && <Table data={this.generateTableData(this.filterYear(this.state.data))} classname={"live-data"} headings={headings} />}
      </main>
    )
  }
}


