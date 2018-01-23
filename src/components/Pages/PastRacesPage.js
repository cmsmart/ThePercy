import React, { Component } from 'react'

import { getUpdates } from "../../api/updates"
import { getMushers } from "../../api/mushers"

import DashboardLineChart from "../Charts/DashboardLineChart"
import { Dropdown } from "../Dropdown"
import { MushersContainer } from "../MushersContainer/index"
import { TableContainer } from "../TableContainer/index"

import { generateYears } from "../../utils/generateYears"
import { getRaceDataByEvent } from '../../api/races';
import { event_ids } from "../../api/event_id";

const getRaceIDFromYear = (year, race) => {
	let id = "";
	let yearInt = parseInt(year)
	event_ids.map(event => {
		if (event.year === yearInt) {
			if (event.name === race) {
				id = event.event_id;
			}
		}
	});
	return id;
};

export default class PastRacesPage extends Component {
	state = { 
		mushers: null, 
		tableData: null, 
		year: "2017", 
		race: "Percy", 
		raceData: null 
	};

	componentDidMount = () => {
			getUpdates().then(res => {
				this.setState({ tableData: res });
			});
			getMushers().then(res => {
				this.setState({ mushers: res });
			});
			getRaceDataByEvent(getRaceIDFromYear(this.state.year, this.state.race)).then(res => {
					this.setState({
						raceData: res.data.data
					});
				}
			);
		};

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.raceData !== this.state.raceData) {
		getRaceDataByEvent(getRaceIDFromYear(this.state.year, this.state.race)).then(
      res => {
        this.setState({
          raceData: res.data.data
        });
      }
		)
	}
	}

		handleYearSelection = year => {
			this.setState({ year: year });
		};

		handleRaceSelection = race => {
			this.setState({ race: race });
		};

		render = () => {
			console.log("past race data ", this.state.raceData);
			return !!this.state.mushers && !!this.state.tableData && !!this.state.raceData && <main className="dashboard">
						<div className="searchFilter">
							<Dropdown data={generateYears(2012)} handleSelection={this.handleYearSelection} />
							<Dropdown data={["Percy", "Percy Junior"]} handleSelection={this.handleRaceSelection} />
						</div>
						<MushersContainer mushers={this.state.mushers} year={this.state.year} race={this.state.race} />
						<DashboardLineChart {...this.state} title="Race Progress Chart" />
						<TableContainer tableClass={"live-data"} tableData={this.state.tableData} year={this.state.year} race={this.state.race} />
					</main>;
		};
	}


