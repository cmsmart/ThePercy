import React, { Component } from 'react'

import {BarChart, Bar, XAxis, YAxis,Tooltip, ReferenceLine, Label} from 'recharts'
import { ResponsiveContainer } from 'recharts';

const data = [
      {year: '2000', day: '22 March', temperature: [4.8, -5.6] },
      {year: '2001', day: '22 March', temperature: [3.3, -17.2],},
      {year: '2002'},
      {year: '2007', day: '22 March', temperature: [-0.7, -12.1] },
      {year: '2008', day: '22 March', temperature: [-1, -25.8,]},
      {year: '2009', day: '22 March', temperature: [1.9, -13.1,]},
      {year: '2010', day: '22 March', temperature: [-7.3, -21.6,]},
      {year: '2011', day: '22 March', temperature: [2.6, -18]},
      {year: '2012', day: '22 March', temperature: [-9.3, -24.4]},
      {year: '2013', day: '22 March', temperature: [-3.4, -28.4]},
      {year: '2014', day: '22 March', temperature: [0.6, -23.2]},
      {year: '2015', day: '22 March', temperature: [6.9, -11,]},
      {year: '2016', day: '22 March', temperature: [7, -2.7]},
      {year: '2017', day: '22 March', temperature: [-4.5, -23.5]},
];

export default class WeatherChart extends Component {
	render () {
  	return (
        <div className="outer-wrapper">
        <h2>Daily Weather @ Race Start</h2>
            <div className="Composed-chart-wrapper rechart" style={{ height: '500px' }}>
                <ResponsiveContainer padding="1rem">
                <BarChart
                    width={400}
                    height={400}
                    data={data}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                    <XAxis dataKey="year">
                        <Label value="Year" offset={-15} position="insideBottom" />
                    </XAxis>
                    <YAxis>
                        <Label value="Temp (°C  )" angle={-90} position="insideLeft"/> 
                    </YAxis>
                    <Tooltip />
                    <Bar dataKey="temperature" fill="#b4c8a8" barSize={15} name="Temperature range" unit="°C" />
                    <ReferenceLine y={0} stroke="red" strokeDasharray="3 3"  />
                </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
  }
}

