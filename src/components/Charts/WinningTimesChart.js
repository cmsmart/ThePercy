import React, { Component } from 'react'
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts'

import { getPastMushers } from '../../api/pastmushers'

const generateYearsObjectArray = () => {
    let years = []
    for (let i = 1981; i < (new Date()).getFullYear(); i++) {
      years = [ ...years, { year: `${i}` } ]
    }
    return years
}
  
const generateWinningTimesData = (data) => {
    let filteredArray = data.filter((datum) => datum.standing === '1')
    let years = generateYearsObjectArray()
    
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

// const RenderLegend = () => {
//     return <div style={{color: "#191919",display: "inline-block", padding: "0.3rem 1.2rem"}}>
//       <p style={{ padding: "0.3rem 1.2rem",textAnchor: "middle", margin: "0", fontSize: "0.8rem", textAlign: "center", fontWeight: "bold"
//       }}>Legend</p>
//       <p style={{ backgroundColor: "#3d5941", color: "#fff", padding: "0.5rem 1.2rem", margin: "0.1rem", textAnchor: "middle", fontSize: "0.8rem", textAlign: "center"
//       }}>Percy</p>
//       <p style={{ textAlign: "center", color: "#fff", backgroundColor: "#b5b991", fontSize: "0.8rem", padding: "0.5rem 1.2rem", textAnchor: "middle", margin: "0.1rem"
//       }}>Percy Junior</p>
//     </div>
// }

  export default class WinningTimesChart extends Component {

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
        
  	return (
        <div className="outer-wrapper">
        <h2>Win Times</h2>
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
                        <CartesianGrid strokeDasharray="3 3" stroke='#f5f5f5'/>
                        <Tooltip cursor={{fill: "eee"}} />
                        <Legend verticalAlign="top"/> 
                        <Bar dataKey="Percy Junior" name="Percy Jr" fill="#b5b991" />
                        <Bar dataKey="Percy" name="Percy" fill="#3d5941"/>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
        );
    }
}
