import React, { Component } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, Label} from 'recharts';

const series = [
  {year: '2012', data: [
    {time: '0', dist: 0 },
    {time: '30', dist: 152.7},
    {time: '50', dist: 338}
  ]},
  {year: '2013', data: [
    {time: '0', dist: 0 },
    {time: '30', dist: 152.7},
    {time: '45', dist: 338}
  ]},
  {year: '2016', data: [
    {time: '0', dist: 0 },
    {time: '13', dist: 12.4},
    {time: '18', dist: 25.7},
    {time: '28', dist: 137.8 },
    {time: '30', dist: 145.8},
    {time: '45', dist: 338}
  ]},
  {year: '2017', data: [
    {time: '0', dist: 0 },
    {time: '5', dist: 7.4},
    {time: '50', dist: 338}
  ]},
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
    backgroundColor: "#5f4b8b",
    color: "#fff",
    padding: "0.25rem 0.6rem",
    margin: "0.05rem",
    textAnchor: "middle",
    fontSize: "0.4rem",
    textAlign: "center"
  }}>2018</p>
  <p style={{
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#88b04b",
    fontSize: "0.4em",
    padding: "0.25rem 0.6rem",
    textAnchor: "middle",
    margin: "0.05rem"
  }}>2017</p>
  <p style={{
    backgroundColor: "#91a8d0",
    color: "#fff",
    padding: "0.25rem 0.6rem",
    margin: "0.05rem",
    textAnchor: "middle",
    fontSize: "0.4rem",
    textAlign: "center"
  }}>2016</p>
  <p style={{
    backgroundColor: "#964f4c",
    color: "#fff",
    padding: "0.25rem 0.6rem",
    margin: "0.05rem",
    textAnchor: "middle",
    fontSize: "0.4rem",
    textAlign: "center"
  }}>2015</p>
  <p style={{
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#ad5e99",
    fontSize: "0.4rem",
    padding: "0.25rem 0.6rem",
    textAnchor: "middle",
    margin: "0.05rem"
  }}>2014</p>
  <p style={{
    backgroundColor: "#009473",
    color: "#fff",
    padding: "0.25rem 0.6rem",
    margin: "0.05rem",
    textAnchor: "middle",
    fontSize: "0.4rem",
    textAlign: "center"
  }}>2013</p>
   <p style={{
    backgroundColor: "#dd4124",
    color: "#fff",
    padding: "0.25rem 0.6rem",
    margin: "0.05rem",
    textAnchor: "middle",
    fontSize: "0.4rem",
    textAlign: "center"
  }}>2012</p>
  </div>
}

const YearColor = [
  {year: "2018", lineColor: "#5f4b8b"},
  {year: "2017", lineColor: "#88b04b"},
  {year: "2016", lineColor: "#91a8d0"},
  {year: "2015", lineColor: "#964f4c"},
  {year: "2014", lineColor: "#ad5e99"},
  {year: "2013", lineColor: "#009473"},
  {year: "2012", lineColor: "#dd4124"}
]

class MusherLineChart extends Component {
	render () {
  	return (
      <div className="Line-chart-wrapper" style={{ width: "45%", height: "400px", backgroundColor: "#f8f8f8", border: "1px solid black", margin: "10px" }}>
      <ResponsiveContainer padding="1rem">
        <LineChart width={300} height={300} margin={{top: 30, right: 30, left: 50, bottom: 50}}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
          <XAxis dataKey="time" type="time" domain={[0, 50]} ticks={[10, 20, 30, 40, 50]} >
            <Label value={['Time (hours)']} offset={-45} position="insideBottom" ticks={[85, 169, 254, 338]}/>
          </XAxis>
          <YAxis  dataKey="dist"  type="number"  allowDuplicatedCategory={false} domain={[0, 338]} >
            <Label value={['Distance (km)']} angle={-90} offset={-25} position="insideLeft" /> 
          </YAxis>
          <Tooltip/>
          <Legend layout="vertical" verticalAlign="middle" align="leftBottom" content={RenderLegend}/> />
          {series.map(s => (
            <Line dataKey="dist" data={s.data} name={s.year} key={s.year} /> 
          ))}
          {YearColor.map(year => (
             <Line key={year.year} stroke={year.lineColor} name={year.year} strokeWidth="2" />
          ))}
            <ReferenceLine y={80.4} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em',  fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine y={159.87} stroke="#FA5252" label={{ position: "top", value: "Eagle", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine y={240.27} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine y={338} stroke="#FA5252" label={{ position: "top", value: "Finish Dawson", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    )}
}

export default MusherLineChart