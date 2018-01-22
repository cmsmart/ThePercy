import React, { Component } from 'react'

import {BarChart, Bar, XAxis, YAxis,Tooltip, ReferenceLine, CartesianGrid, Label, CartesianAxis} from 'recharts'
import { ResponsiveContainer } from 'recharts';

const data = [
    //   {year: '2000', day: '16 March', temperature: [4.8, -5.6] },
    //   {year: '2001', day: '15 March', temperature: [3.3, -17.2],},
      {year: '2002', day: '21 March', temperature: [-1.3, -25.2],},
      {year: '2003', day: '20 March', temperature: [5.2, -19.4],},
      {year: '2004', day: '18 March', temperature: [-2.7, -25.5],},
      {year: '2005', day: '17 March', temperature: [0.9, -12.7],},
      {year: '2006', day: '16 March', temperature: [-16.7, -39.7],},
      {year: '2007', day: '22 March', temperature: [-0.7, -12.1]},
      {year: '2008', day: '27 March', temperature: [-1, -25.8,]},
      {year: '2009', day: '26 March', temperature: [1.9, -13.1,]},
      {year: '2010', day: '25 March', temperature: [-7.3, -21.6,]},
      {year: '2011', day: '24 March', temperature: [2.6, -18]},
      {year: '2012', day: '22 March', temperature: [-9.3, -24.4]},
      {year: '2013', day: '28 March', temperature: [-3.4, -28.4]},
      {year: '2014', day: '27 March', temperature: [0.6, -23.2]},
      {year: '2015', day: '26 March', temperature: [6.9, -11,]},
      {year: '2016', day: '24 March', temperature: [7, -2.7]},
      {year: '2017', day: '23 March', temperature: [-4.5, -23.5]},
    //   {year: '2018', day: '22 March'},

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
                    <YAxis unit="°C">
                        <Label value="Temp (°C  )" angle={-90} position="insideLeft" /> 
                    </YAxis>
                    <Tooltip />
                    <CartesianGrid stroke="#eee" />
                    <Bar dataKey="temperature" fill="#b4c8a8" barSize={15} name="Temperature range" unit="°C" />
                    <ReferenceLine y={0} stroke="red" />
                </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
  }
}

