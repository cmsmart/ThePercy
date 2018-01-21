import React, { Component } from 'react'

import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label, Legend } from 'recharts'

import { ResponsiveContainer } from 'recharts'

import { getPastMushers } from '../../api/pastmushers'

const generateYearsArray = () => {
  let years = []
  for (let i = 1990; i < (new Date()).getFullYear(); i++) {
    years = [ ...years, { year: `${i}` } ]
  }
  return years
}

const generateRunTimesData = (data) => {
  const first = []
  data.map((result) => {
      if (result.standing === "1") {
          first.push(Object.assign({}, {'wintime': parseFloat((result.run_time).replace(/:/gi, '.')), 'year': result.year, 'race': result.race}))
      }
      return first
  })
  let filteredArray = data.filter((datum) => datum.musher_id === '88')
  let years = generateYearsArray()
  
  filteredArray.map((musher) => {
    var runtime = !isNaN((parseFloat(musher.run_time))) ? musher.runtime = parseFloat((musher.run_time).replace(/:/gi, '.')) : musher.runtime = null
    years = years.map((year) => {
      if (year.year === musher.year) {
        first.map((win) => {
          if ((musher.year === win.year) && (musher.race === win.race)) {
            year = Object.assign({}, year, { 'runtime': runtime, 'race': musher.race, 'standing': musher.standing, 'win': win.wintime })
          }
          return year
        })
      }
      return years
    })
    return years
  })
}

class MusherHistoryChart extends Component {

  state = {
    mushers: null,
    data: null
  }

  componentDidMount() {    
    getPastMushers().then((res) => {
      this.setState({ mushers: res })
    }).then(() => {
      this.setState({ data: generateRunTimesData(this.state.mushers) })
    })
  }
	render () {
  	return (
        <div className="Composed-chart-wrapper" style={{ width: '95%', height: '400px', backgroundColor: "#f8f8f8", border: "1px solid black", margin: "10px" }}>
            <ResponsiveContainer padding="1rem">
                <ComposedChart width={800} height={300} data={this.state.data}
                margin={{top: 30, right: 30, left: 50, bottom: 30}}>
                    <XAxis dataKey="year" >
                      <Label value="Year" offset={-15} position="insideBottom"/>
                    </XAxis>
                    <YAxis>
                      <Label value="Time (hours)" angle={-90} offset={-35} position="insideLeft"/> 
                    </YAxis>
                    
                    <CartesianGrid strokeDasharray="3 3" stroke='#f5f5f5'/>
                    <Tooltip cursor={{fill: "eee"}} />
                    <Legend verticalAlign="top" align="right" />
                    {/* <Bar dataKey="runtime" fill="#8884d8" barSize={20} > */}
                      {/* {
                        data.map((entry, index) => { 
                          return <Cell fill={data[index].race === 'Percy' ? '#0C2639' : '#C3D8EC' } />;
                        })
                      } */}
                    {/* </Bar> */}
                    <Bar dataKey="runtime" stackId="a" fill="#8884d8" />
                    {/* <Bar dataKey="win" stackId="b" fill="#82ca9d" /> */}
                    {/* <Line type='monotone' dataKey='runtime' stroke='#ff7300' connectNulls={true}/> */}
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
  }
}

export default MusherHistoryChart

