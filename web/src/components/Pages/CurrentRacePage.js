import React, { Component } from 'react'

import { getUpdates } from '../../api/updates'
import { getMushers } from '../../api/mushers'
import { getRaceDataByEvent } from "../../api/races"

import DashboardLineChart from '../Charts/DashboardLineChart'
import { MushersContainer } from '../MushersContainer/index'
import ProgressBarChart from '../Charts/ProgressBarChart'
import { TableContainer } from '../TableContainer/index'
// import { filterData } from '../../utils/filterData'
import { getRaceID } from "../../utils/getRaceID"

export default class CurrentRacePage extends Component {    
    state = {
        tableData: null,
        mushers: null,
        data: null,
        field: null,
        raceData: null
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
            this.setState({ tableData: res })
        })
        getMushers().then((res) => {
            this.setState({ mushers: res })
        })
        getRaceDataByEvent(getRaceID(2017, "Percy")).then(
          res => {
            this.setState({
              raceData: res.data.data
            });
          }
        );
    }

    
    // filterYear = (data) => {
    //     let filteredData = data.filter((datum) => (
    //     //   datum.year === (new Date()).getFullYear()
    //       datum.year === "2017"
    //     ))
    //     return filteredData
    //   }

    render = () => {
        return !!this.state.tableData && !!this.state.mushers && !!this.state.raceData &&
        
        <main className="dashboard">
        {console.log(this.state.raceData)}

                {!!this.state.mushers && (
                  <MushersContainer
                    mushers={this.state.mushers}
                    year={"2017"}
                    race={"Percy"}
                  >2017 Field</MushersContainer>
                )}

              <ProgressBarChart {...this.state} title="Progress Bar Chart" />

              <DashboardLineChart {...this.state} title="Race Progress Chart" >Race Progress</DashboardLineChart>

              <div className="outer-wrapper">
                {!!this.state.tableData && <TableContainer tableClass={"live-data"} tableData={this.state.tableData} year={"2017"} race={"Percy"}>
                    Race Updates - The Percy</TableContainer>}
              </div>
            </main>;
    }
}


