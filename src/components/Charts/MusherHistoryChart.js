import React, { Component } from 'react'

import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Label, Legend, ResponsiveContainer } from 'recharts'

import { getPastMushers } from '../../api/pastmushers'

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
      return (time === "unknown") || time === "scratched" ? musher.run_time : musher.runtime = parseFloat((time).replace(/:/gi, '.'))
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

  // start musher chart history at musher's first race
//   const firstYear = (filteredArray.slice(-1)[0])
//   const musherRaceYears = years.filter((datum) => (datum.year >= firstYear.year))
//   return musherRaceYears
  return years
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
                        <Label value="Time (hours)" angle={-90} offset={-35} position="insideLeft"/> 
                      </YAxis>
                      <Tooltip cursor={{fill: "eee"}} />
                      <Legend verticalAlign="top" align="right" />
                      <Bar dataKey="runtime" stackId="a" className="percy_bar" barSize={20} />
                      <Line type='linear' dataKey='win' stroke='none' dot={{ fill: 'red', stroke: 'red' }} isAnimationActive={false}/>
                  </ComposedChart>
              </ResponsiveContainer>
          </div>
      </div>
    );
  }

