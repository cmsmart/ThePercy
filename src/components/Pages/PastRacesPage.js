import React, { Component } from 'react'

import { getUpdates } from "../../api/updates"
import { getMushers } from "../../api/mushers"

import DashboardLineChart from "../Charts/DashboardLineChart"
import { Dropdown } from "../FilterContainer/Dropdown"
import { FilterContainer } from '../FilterContainer/index'
import { MushersContainer } from "../MushersContainer/index"
import { TableContainer } from "../TableContainer/index"

import { generateYears } from "../../utils/generateYears"

export default class PastRacesPage extends Component {
    state = { 
        mushers: null,
        tableData: null,
        year: '2017', 
        race: 'Percy'
    }

    componentDidMount = () => {
        getUpdates().then((res)=> {
            this.setState({ tableData: res })
        })
        getMushers().then((res)=> {
            this.setState({ mushers: res })
        })
    } 

    handleYearSelection = (year) => {
        this.setState({ year: year })
    };

    handleRaceSelection = (race) => {
        this.setState({ race: race })
    };

    render = () => {
        return (
            <main className="dashboard">
                <FilterContainer>
                    <Dropdown data={generateYears(2012)} handleSelection={this.handleYearSelection} />
                    <Dropdown data={['Percy', 'Percy Junior']} handleSelection={this.handleRaceSelection} />
                </FilterContainer>
                <div>{this.state.year}</div>
                {!!this.state.mushers && <MushersContainer mushers={this.state.mushers} year={this.state.year} race={this.state.race} />}
                <DashboardLineChart {...this.state} title="Race Progress Chart" />
                {!!this.state.tableData && <TableContainer tableClass={'live-data'} tableData={this.state.tableData} year={this.state.year} race={this.state.race} /> }
            </main>
        )
    }
}


