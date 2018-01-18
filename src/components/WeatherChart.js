import React, { Component } from 'react'

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import { ResponsiveContainer } from 'recharts';

const data = [
      {year: '2000', max: 4.8, min: -5.6, mean: 2400},
      {year: '2001', max: 3.3, min: -17.2, mean: 2210},
      {year: '2002', max: '', min: '', mean: 2290},
      {year: '2003', max: '', min: '', mean: 2000},
      {year: '2004', max: '', min: '', mean: 2181},
      {year: '2005', max: '', min: '', mean: 2500},
      {year: '2006', max: '', min: '', mean: 2100},
      {year: '2007', max: -0.7, min: -12.1, mean: 2100},
      {year: '2008', max: -1, min: -25.8, mean: 2100},
      {year: '2009', max: 1.9, min: -13.1, mean: 2100},
      {year: '2010', max: -7.3, min: -21.6, mean: 2100},
      {year: '2011', max: 2.6, min: -18, mean: 2100},
      {year: '2012', max: -9.3, min: -24.4, mean: 2100},
      {year: '2013', max: -3.4, min: -28.4, mean: 2100},
      {year: '2014', max: 0.6, min: -23.2, mean: 2100},
      {year: '2015', max: 6.9, min: -11, mean: 2100},
      {year: '2016', max: 7, min: -2.7, mean: 2100},
      {year: '2017', max: -4.5, min: -23.5, mean: 2100},
];

export default class WeatherChart extends Component {
	render () {
  	return (
        <div className="Composed-chart-wrapper rechart" style={{ height: '500px', backgroundColor: "#f8f8f8", border: "1px solid black", margin: "10px" }}>
        <h2>Daily Weather @ Race Start</h2>
            <ResponsiveContainer padding="1rem">
                <LineChart width={600} height={300} data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="year"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="max" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="min" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
  }
}

