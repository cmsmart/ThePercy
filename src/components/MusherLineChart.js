import React, { Component } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ReferenceLine, ResponsiveContainer} from 'recharts'

const Recharts = {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend}; 
const series = [
  {year: '2012', data: [
    {time: '0', dist: 0 },
    {time: '30', dist: 152.7},
    {time: '32', dist: 338}
  ]},
  {year: '2016', data: [
    {time: '0', dist: 0 },
    {time: '13', dist: 12.4},
    {time: '18', dist: 25.7},
    {time: '28', dist: 137.8 },
    {time: '30', dist: 145.8},
    {time: '38', dist: 338}
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
      <LineChart width={600} height={300}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="dist"  type="number" allowDuplicatedCategory={false} domain={[0, 338]}/>
        <YAxis dataKey="time" type="time" domain={[0, 40]} />
        <Tooltip/>
        <Legend/>
        {series.map(s => (
          <Line dataKey="time" data={s.data} name={s.year} key={s.year} />
        ))}
      </LineChart>
    )}
}

export default MusherLineChart