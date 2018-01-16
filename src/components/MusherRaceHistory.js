import React, { Component } from 'react'

import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList, Legend, Label } from 'recharts'

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

// const CustomLabel = (props) => {
//   return <div>{props.value}</div>
// }

const RenderLegend = () => {
  return <div style={{
    color: "#191919",
    display: "inline-block",
    padding: "0.3rem 1.2rem",
  }}>
  <p style={{
    padding: "0.3rem 1.2rem",
    textAnchor: "middle",
    margin: "0",
    fontSize: "0.8rem",
    textAlign: "center",
    fontWeight: "bold"
  }}>Legend</p>
  <p style={{
    backgroundColor: "#0C2639",
    color: "#fff",
    padding: "0.5rem 1.2rem",
    margin: "0.1rem",
    textAnchor: "middle",
    fontSize: "0.8rem",
    textAlign: "center"
  }}>Percy</p>
  <p style={{
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#C3D8EC",
    fontSize: "0.8rem",
    padding: "0.5rem 1.2rem",
    textAnchor: "middle",
    margin: "0.1rem"
  }}>Percy Junior</p>
  <p style={{
    backgroundColor: "#ff7300",
    color: "#fff",
    padding: "0.5rem 1.2rem",
    margin: "0.1rem",
    textAnchor: "middle",
    fontSize: "0.8rem",
    textAlign: "center"
  }}>Run Time</p>
  </div>
}

class MusherHistoryChart extends Component {
	render () {
  	return (
        <div className="Composed-chart-wrapper" style={{ width: '95%', height: '400px', backgroundColor: "#f8f8f8", border: "1px solid black", margin: "10px" }}>
            <ResponsiveContainer padding="1rem">
                <ComposedChart width={800} height={300} data={data}
                margin={{top: 30, right: 30, left: 50, bottom: 30}}>
                    <XAxis dataKey="year">
                      <Label value="Year" offset={-15} position="insideBottom"/>
                    </XAxis>
                    <YAxis>
                      <Label value="Time (hours)"angle={-90} offset={-35} position="insideLeft"/> 
                    </YAxis>
                    <CartesianGrid strokeDasharray="3 3" stroke='#f5f5f5'/>
                    <Tooltip cursor={{fill: "eee"}} />
                    <Legend layout="vertical" verticalAlign="middle" align="right" content={RenderLegend}/> 

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

