import React, { Component } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ReferenceLine, ResponsiveContainer} from 'recharts'

const Recharts = {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend}; 
const series = [
  {year: '2012', data: [
    {time: '0', dist: 0 },
    {time: '30', dist: 152.7},
    {time: '32', dist: 338}
  ]},
  {year: '2013', data: [
    {time: '0', dist: 0 },
    {time: '30', dist: 152.7},
    {time: '50', dist: 338}
  ]},
  {year: '2016', data: [
    {time: '0', dist: 0 },
    {time: '13', dist: 12.4},
    {time: '18', dist: 25.7},
    {time: '28', dist: 137.8 },
    {time: '30', dist: 145.8},
    {time: '30', dist: 338}
  ]},
  {year: '2017', data: [
    {time: '0', dist: 0 },
    {time: '5', dist: 7.4},
    {time: '27', dist: 338}
  ]},
];

class MusherLineChart extends Component {
	render () {
  	return (
      <div className="area-chart-wrapper" style={{ width: '50%', height: '400px' }}>
      <ResponsiveContainer>
      <LineChart width={300} height={300} margin={{top: 30, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="time" type="time" domain={[0, 50]}/>
        <YAxis  dataKey="dist"  type="number" allowDuplicatedCategory={false} domain={[0, 338]}/>
        <Tooltip/>
        <Legend/>
        {series.map(s => (
          <Line type="monotone" dataKey="time" data={s.data} name={s.year} key={s.year} stroke="#4e7590"  strokeWidth="3" />
        ))}
          <ReferenceLine y={80.4} stroke="red" label={{ position: "end", value: "Fortymile in", fill:"red" }}  />
          <ReferenceLine y={159.87} stroke="red" label={{ position: "top", value: "Eagle", fill:"red" }} />
          <ReferenceLine y={240.27} stroke="red" label={{ position: "top", value: "Fortymile out", fill:"red" }} />
          <ReferenceLine y={338} stroke="red" label={{ position: "top", value: "Finish", fill:"red" }} />
      </LineChart>
      </ResponsiveContainer>
      </div>
    )}
}

export default MusherLineChart