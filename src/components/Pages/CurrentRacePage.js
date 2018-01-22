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


const generateBibListData = (data) => {
    let bibListData = data.map((datum) => (
        datum = { 
            bib: datum.bib,
            musher: <a href={`/mushers/${datum.musher_id}`}> { datum.musher} </a>
        }
    ))
    return bibListData
}

const BibListContainer = (props) => {
    return (
        <div className="table-container">
            <h2>{props.children}</h2>
            <BibLegendList tableClass={props.tableClass} data={generateBibListData(filterData(props.bibListData, props.year, props.race))} headings={musherBibHeadings} />
        </div>
    )
}



export default class CurrentRacePage extends Component {    
    state = {
        tableData: null,
        mushers: null
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

    render = () => {
        return (
            !!this.state.tableData && !!this.state.mushers && <main className="dashboard">

            {!!this.state.bibLegendData && <BibLegendList tableClass={'live-data'} tableData={this.state.tableData} year={'2017'} race={'Percy'} /> }

                <ProgressBarChart title="Progress Bar Chart" />

                <TimerContainer />
                
                <div className="outer-wrapper">
                    {!!this.state.mushers && <MushersContainer mushers={this.state.mushers} year={'2017'} race={'Percy' }/>}
                </div>

                <DashboardLineChart title="Race Progress Chart" />

                <div className="outer-wrapper">
                    {!!this.state.tableData && <TableContainer tableClass={'live-data'} tableData={this.state.tableData} year={'2017'} race={'Percy'} /> }
                </div>
            </main>
        )
    }
}


