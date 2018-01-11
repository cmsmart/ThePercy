import React, { Component } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ReferenceLine, ResponsiveContainer} from 'recharts'

const Recharts = {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend}; 
const series = [
  {year: '2012', data: [
    {time: '0', dist: 0 },
    {time: '30', dist: 52.7},
    {time: '3700', dist: 330}
  ]},
  {year: '2016', data: [
    {time: '0', dist: 0 },
    {time: '13', dist: 12.4},
    {time: '18', dist: 25.7},
    {time: '28', dist: 37.8 },
    {time: '30', dist: 45.8},
    {time: '7900', dist: 330}
  ]},
  {year: '2017', data: [
    {time: '0', dist: 0 },
    {time: '5', dist: 7.4},
    {time: '19', dist: 30.7}
  ]},
];

class MusherLineChart extends Component {
	render () {
  	return (
    	<LineChart width={600} height={300}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="time" type="time" allowDuplicatedCategory={false} />
        <YAxis dataKey="dist"/>
        <Tooltip/>
        <Legend/>
        {series.map(s => (
          <Line dataKey="dist" data={s.data} name={s.year} key={s.year} />
        ))}
      </LineChart>
    )}
}

export default MusherLineChart