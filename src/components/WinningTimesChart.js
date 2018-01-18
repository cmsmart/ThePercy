import React, { Component } from 'react'
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts'

import { getPastMushers } from '../api/pastmushers'

const generateYearsArray = () => {
    let years = []
    for (let i = 2000; i < (new Date()).getFullYear(); i++) {
      years = [ ...years, { year: `${i}` } ]
    }
    return years
}
  
const generateWinningTimesData = (data) => {
    let filteredArray = data.filter((datum) => datum.standing === '1')
    let years = generateYearsArray()
    
    filteredArray.map((musher) => {
        return years = years.map((year) => {
            if (year.year === musher.year) {
                year = Object.assign({}, year, { [musher.race]: parseFloat((musher.run_time).replace(/:/gi, '.')) })
            }
            return year
        })
    })
    return years
}

const RenderLegend = () => {
    return (
        <div style={{
            color: "#191919",
            display: "inline-block",
            padding: "0.3rem 1.2rem",
        }}>
            <p style={{
                padding: "0.3rem 1.2rem",
                textAnchor: "middle",
                margin: "0",
                fontSize: "0.8rem",
                textAlign: "center",
                fontWeight: "bold"
            }}>Legend</p>
            <p style={{
                backgroundColor: "#0C2639",
                color: "#fff",
                padding: "0.5rem 1.2rem",
                margin: "0.1rem",
                textAnchor: "middle",
                fontSize: "0.8rem",
                textAlign: "center"
            }}>Percy</p>
            <p style={{
                textAlign: "center",
                color: "#fff",
                backgroundColor: "#C3D8EC",
                fontSize: "0.8rem",
                padding: "0.5rem 1.2rem",
                textAnchor: "middle",
                margin: "0.1rem"
            }}>Percy Junior</p>
        </div>
    )
}

export default class WinningTimesChart extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        getPastMushers().then((res) => {
            this.setState({ data: res })
        })
    }

	render () {
        return (
            !!this.state.data && <div className="Composed-chart-wrapper" style={{ width: '95%', height: '400px', backgroundColor: "#f8f8f8", border: "1px solid black", margin: "10px" }}>
                <ResponsiveContainer padding="1rem">
                    <ComposedChart width={800} height={300} data={generateWinningTimesData(this.state.data)}
                    margin={{top: 30, right: 30, left: 50, bottom: 30}}>
                        <XAxis dataKey="year">
                        <Label value="Year" offset={-15} position="insideBottom"/>
                        </XAxis>
                        <YAxis>
                        <Label value="Time (hours)"angle={-90} offset={-35} position="insideLeft"/> 
                        </YAxis>
                        <CartesianGrid strokeDasharray="3 3" stroke='#f5f5f5'/>
                        <Tooltip cursor={{fill: "eee"}} />
                        <Legend layout="vertical" verticalAlign="middle" align="right" content={RenderLegend}/> 
                        <Bar dataKey="Percy Junior" name="Percy Jr" fill="blue" label={'test'} />
                        <Bar dataKey="Percy" name="Percy" fill="green" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        );
    }
}