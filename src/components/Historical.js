import React, { Component } from 'react';
import { FilterContainer } from './FilterContainer';
import ProgressBarChart from "../components/ProgressBarChart";
import DashboardLineChart from "../components/DashboardLineChart";
import { getUpdates } from "../api/updates";
import { getMushers } from "../api/mushers";
import Timer from "../containers/Timer";
import { Results } from "../components/Results";
import { Table } from "./Table";
import { filterResults } from "../utils/filterResults";

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
];

export class Historical extends Component {
  state = { 
    data: null, 
    field: null ,
    year: '2017', 
    race: 'Race'
  }

  componentDidMount() {
    getUpdates()
    .then((res)=> {
      this.setState({ data: res })
    })
    getMushers()
    .then((res)=> {
      this.setState({ field: res })
    })
  } 

  handleYearSelection = (year) => {
    this.setState({ year: year })
  };

  handleRaceSelection = (race) => {
    this.setState({ race: race });
  };

  generateTableData(data) {
    let tableData = {};
    tableData = data.map(datum => {
      return (datum = { status: datum.status, musher: datum.musher, bib: datum.bib, chk_start: datum.chk_start, chk_fm_ob_in: datum.chk_fm_ob_in, chk_fm_ob_out: datum.chk_fm_ob_out, chk_eag_in: datum.chk_eag_in, chk_eag_out: datum.chk_eag_out, chk_fm_ib_in: datum.chk_fm_ib_in, chk_fm_ib_out: datum.chk_fm_ib_out, chk_finish: datum.chk_finish, run_time: datum.run_time });
    });
    return tableData;
  }

  render() {
    return <main className="dashboard">
        <FilterContainer handleYearSelection={this.handleYearSelection} handleRaceSelection={this.handleRaceSelection} />
        <div>{this.state.year}</div>
        {!!this.state.field && <Results data={filterResults(this.state.field, this.state.year, this.state.race)} />}
        <DashboardLineChart {...this.state} title="Race Progress Chart" />
        {!!this.state.data && <Table data={this.generateTableData(filterResults(this.state.data, this.state.year, this.state.race))} classname={"live-data"} headings={headings} />}
      </main>;
  }
}


