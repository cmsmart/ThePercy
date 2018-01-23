import React, { Component } from 'react'

import { getUpdates } from '../../api/updates'
import { getMushers } from '../../api/mushers'

import DashboardLineChart from '../Charts/DashboardLineChart'
import { MushersContainer } from '../MushersContainer/index'
import ProgressBarChart from '../Charts/ProgressBarChart'
import { TableContainer } from '../TableContainer/index'
import TimerContainer from '../TimerContainer/index'
import { BibLegendList } from '../BibLegendList'
import { filterData } from '../../utils/filterData'

const musherBibHeadings = ['Bib', 'Name']

export default class CurrentRacePage extends Component {    
    state = {
        tableData: null,
        mushers: null,
        data: null,
        field: null
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

    musherBibHeadings = ['Bib', 'Name']

    componentDidMount = () => {
        getUpdates().then((res) => {
            this.setState({ tableData: res })
        })
        getMushers().then((res) => {
            this.setState({ mushers: res })
        })
    }

    generateProgressBarBibLegend(data) {
        let bibLegend = {}
        bibLegend = data.map((datum) => {
          return datum = {
            bib: datum.bib,
            musher: datum.musher
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

    render = () => {
        return (
            !!this.state.tableData && !!this.state.mushers && <main className="dashboard">

                {!!this.state.data && <BibLegendList className="musherbiblist" data={this.generateProgressBarBibLegend(this.filterYear(this.state.data))} classname={"bib-list"} headings={musherBibHeadings} />}

                <ProgressBarChart title="Progress Bar Chart" {...this.state} />

                <TimerContainer />
                
                <div className="outer-wrapper">
                    {!!this.state.mushers && <MushersContainer mushers={this.state.mushers} year={'2017'} race={'Percy' }/>}
                </div>

                <DashboardLineChart {...this.state} title="Race Progress Chart" />

                <div className="outer-wrapper">
                    {!!this.state.tableData && <TableContainer tableClass={'live-data'} tableData={this.state.tableData} year={'2017'} race={'Percy'} >Race Updates - The Percy</TableContainer> }
                </div>
            </main>
        )
    }
}


