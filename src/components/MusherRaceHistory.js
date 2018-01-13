import React, { Component } from 'react'
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList, Legend } from 'recharts'
import { ResponsiveContainer } from 'recharts';

const Recharts = {ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList, Legend};
const data = [
  {year: '2002', place: 6, runtime: 9.53, race: "Percy Junior"},
  {year: '2003', place: 1, runtime: 8.22, race: "Percy Junior"},
  {year: '2004', place: 8, runtime: 27.10, race: "Percy"},
  {year: '2005', place: null, runtime: null, race: null},
  {year: '2006', place: 2, runtime: 22.01, race: "Percy"},
  {year: '2007', place: null, runtime: "Scratched", race: null},
  {year: '2008', place: 1, runtime: 22.20, race: "Percy"},
  {year: '2009', place: null, runtime: "scratched", race: "Percy"},
  {year: '2010', place: 5, runtime: 26.24, race: "Percy"},
  {year: '2011', place: 2, runtime: 21.37, race: "Percy"},
  {year: '2012', place: 1, runtime: 24.14, race: "Percy"},
  {year: '2013', place: 4, runtime: 24.43, race: "Percy"},
  {year: '2014', place: 2, runtime: 19.16, race: "Percy"},
  {year: '2015', place: null, runtime: "Scratched", race: "Percy"},
  {year: '2016', place: null, runtime: null, race: null},
  {year: '2017', place: 6, runtime: 27.37, race: "Percy"},
];


class MusherHistoryChart extends Component {
	render () {
  	return (
        <div className="area-chart-wrapper" style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer>
                <ComposedChart width={800} height={300} data={data}
                margin={{top: 15, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="year"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3" stroke='#f5f5f5'/>
                    <Tooltip/>
                    {/* <Legend/> */}
                    <Bar dataKey="runtime" fill="#8884d8" barSize={20} >
                      {
                        data.map((entry, index) => { 
                          return <Cell fill={data[index].race === 'Percy' ? '#0C2639' : '#C3D8EC' } />;
                        })
                      }
                    </Bar>
                    <Line type='monotone' dataKey='runtime' stroke='#ff7300' connectNulls='true'/>
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
  }
}

export default MusherHistoryChart
