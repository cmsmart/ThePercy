import React, { Component } from 'react'

import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Label, Legend, ResponsiveContainer } from 'recharts'

import { generateYearsObject } from '../../utils/generateYears'


const generateRunTimesData = (data, initialYear, id) => {

  // Create an array of all wintimes
  const winningTime = []
  data.map((result) => {
      if (result.standing === "1") {
          winningTime.push(Object.assign({}, {'wintime': parseFloat((result.run_time).replace(/:/gi, '.')), 'year': result.year, 'race': result.race}))
      }
      return winningTime
  })

  // Create an array of objects mapping individual musher runtimes with race wintimes
//   let filteredArray = data.filter((datum) => ((datum.musher_id === id)) && (datum.race === 'Percy'))
  let filteredArray = data.filter((datum) => (datum.musher_id === id))
  let years = generateYearsObject(initialYear)
  
  filteredArray.map((musher) => {

    // Deal with irregular runtime results 
    const runtime = (time) => {
      return (time === "unknown") || (time.toLowerCase()) === "scratched" ? musher.run_time : musher.runtime = parseFloat((time).replace(/:/gi, '.'))
    }
   
    // Map over years array to find years the musher ran
    return years = years.map((year) => {
      if (year.year === musher.year) {
        // Map over winning times array to find win times for years musher ran
        winningTime.map((win) => {
          if ((musher.year === win.year) && (musher.race === win.race)) {
            year = Object.assign({}, year, { 'runtime': runtime(musher.run_time), 'race': musher.race, 'standing': musher.standing, 'win': win.wintime, 'time_status': musher.runtime })
          }
          return year
        })
      }
      return year
    })
  })

  return years
}


export class CustomTooltip extends Component {
  render() {
      const { active } = this.props;
      const { payload, label } = this.props;
      const runtime = () => {
        const mytime = (payload[0].payload.runtime)
        return ((typeof mytime) !== "string") ? mytime.toFixed(2) : mytime.toLowerCase()
      }

      if (active && (payload[0] !== undefined)) {
          return (
              <div className="custom-tooltip">
                  <p className="label">{`${label}`}</p>
                  <p className="label">{`Run time: ${runtime()}`}</p>
                  <p className="label">{`Standing: ${payload[0].payload.standing}`}</p>
                  <p className="label">{`Winning time: ${(payload[0].payload.win).toFixed(2)}`}</p>
              </div>
              
      );
    }
  return null;
  }
}

export const MusherHistoryChart = (props) => {
    return (
      <div className="outer-wrapper">
        <h2>{props.children}</h2>
        <div className="Composed-chart-wrapper" style={{height: '400px'}}>
              <ResponsiveContainer padding="1rem">
                  <ComposedChart height={300} data={generateRunTimesData(props.pastData, props.year, props.id)} margin={{top: 30, right: 30, left: 50, bottom: 30}}>
                    <XAxis dataKey="year" >
                      <Label value="Year" offset={-15} position="insideBottom"/>
                    </XAxis>
                    <YAxis>
                      <Label value="Time (hours)" angle={-90} position="insideLeft"/> 
                    </YAxis>
                    <Tooltip content={<CustomTooltip />} cursor={{fill: "eee"}} />
                    <Legend verticalAlign="top" align="right" />
                    <Bar dataKey="runtime" name="Run time" fill={props.colour}  barSize={15} />
                    <Bar dataKey="win" name="Winning time" fill={props.colour_win} barSize={15} />                  
                  </ComposedChart>
              </ResponsiveContainer>
          </div>
      </div>
    );
  }

