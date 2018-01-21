import React, { Component } from 'react'

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Label} from 'recharts'
import { ResponsiveContainer } from 'recharts';

const data = [
      {year: '2000', max: 4.8, min: -5.6, mean: -0.4},
      {year: '2001', max: 3.3, min: -17.2, mean: -7},
      {year: '2002', max: '', min: '', mean: ''},
      {year: '2003', max: '', min: '', mean: ''},
      {year: '2004', max: '', min: '', mean: ''},
      {year: '2005', max: '', min: '', mean: ''},
      {year: '2006', max: '', min: '', mean: ''},
      {year: '2007', max: -0.7, min: -12.1, mean: -6.4},
      {year: '2008', max: -1, min: -25.8, mean: -13.4},
      {year: '2009', max: 1.9, min: -13.1, mean: -5.6},
      {year: '2010', max: -7.3, min: -21.6, mean: -14.5},
      {year: '2011', max: 2.6, min: -18, mean: -7.7},
      {year: '2012', max: -9.3, min: -24.4, mean: -16.9},
      {year: '2013', max: -3.4, min: -28.4, mean: -15.9},
      {year: '2014', max: 0.6, min: -23.2, mean: -11.3},
      {year: '2015', max: 6.9, min: -11, mean: -2.1},
      {year: '2016', max: 7, min: -2.7, mean: 2.2},
      {year: '2017', max: -4.5, min: -23.5, mean: -14},
];

export default class WeatherChart extends Component {
	render () {
  	return (
        <div className="outer-wrapper">
        <h2>Daily Weather @ Race Start</h2>
            <div className="Composed-chart-wrapper rechart" style={{ height: '500px' }}>
                <ResponsiveContainer padding="1rem">
                    <LineChart height={200} data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 30}}>
                        <XAxis dataKey="year">
                            <Label value="Year" offset={-15} position="insideBottom" />
                        </XAxis>
                        <YAxis>
                            <Label value="Temp (°C  )" angle={-90} position="insideLeft"/> 
                        </YAxis>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip />
                        <Legend verticalAlign="top"/>
                        <Line type="monotone" dataKey="max" stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey="min" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="mean" stroke="red" />
                        <ReferenceLine y={0} stroke="red" strokeDasharray="3 3"  />
                        
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
  }
}

