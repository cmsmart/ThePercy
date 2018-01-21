import React, { Component } from 'react'
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Label, ResponsiveContainer } from 'recharts'

import { getPastMushers } from '../api/pastmushers'

const generateYearsArray = () => {
    let years = []
    for (let i = 2002; i < (new Date()).getFullYear(); i++) {
      years = [ ...years, { year: `${i}` } ]
    }
    return years
}
  
const generateWinningTimesData = (data) => {
    let filteredArray = data.filter((datum) => (datum.standing === '1') && (datum.race === "Percy Junior"))
    let years = generateYearsArray()
    
    filteredArray.map((musher) => {
        return years = years.map((year) => {
            if (year.year === musher.year) {
                year = Object.assign({}, year, { [musher.race]: parseFloat((musher.run_time).replace(/:/gi, '.')), Winner: musher.musher })
            }
            return year
        })
    })   
    return years
}


export class WinningTimesChartJunior extends Component {

    state = {
        mushers: null,
        data: null
      }

      componentDidMount() {    
        getPastMushers().then((res) => {
          this.setState({ mushers: res })
        }).then(() => {
          this.setState({ data: generateWinningTimesData(this.state.mushers) })
        })
      }

	render () {
        console.log(this.state.data)
  	return (
        <div className="outer-wrapper">
        <h2>Win Times - Percy Junior</h2>
            <div className="Composed-chart-wrapper rechart" style={{ height: '500px'}}>
                <ResponsiveContainer padding="1rem">
                    <ComposedChart height={500} data={this.state.data}
                    margin={{top: 5, right: 30, left: 20, bottom: 30}}>
                        <XAxis dataKey="year">
                            <Label value="Year" offset={-15} position="insideBottom" />
                        </XAxis>
                        <YAxis>
                            <Label value="Time (hours)" angle={-90} position="insideLeft"/> 
                        </YAxis>
                        <Tooltip cursor={{fill: "eee"}} fill="blue" />
                        <Bar dataKey="Percy Junior" name="Win time" fill="#de8a5a" className="junior_bar" barSize={15}/>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
        );
    }
}
