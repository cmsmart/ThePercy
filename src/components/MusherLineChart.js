import React, { Component } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ReferenceLine, ResponsiveContainer} from 'recharts'
import PropTypes from 'prop-types'

const Recharts = {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend}; 
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

function renderText(child, x, y, rotate, stroke, key) {
  if (child && child.content) {
    return (<text
      key={key}
      x={x}
      y={y}
      transform={`rotate(${rotate})`}
      textAnchor="middle"
      stroke={stroke}
      {...child.props}>
      {child.content}
    </text>);
  }

  return (<text
    key={key}
    x={x}
    y={y}
    transform={`rotate(${rotate})`}
    textAnchor="middle"
    stroke={stroke}>{child}</text>);
}

function AxisLabel({ axisType, x, y, width, height, stroke, children }) {
  const isVert = axisType === 'yAxis';
  const cx = isVert ? x : x + (width / 2);
  const cy = isVert ? (height / 2) + y : y + height + 20;
  const rot = isVert ? `270 ${cx} ${cy}` : 0;
  const lineHeight = 20;

  if (children.length > 1 && children.map) {
    return (<g>
      {children.map((child, index) =>
        renderText(
          child,
          cx,
          cy + index * lineHeight,
          rot,
          stroke,
          index)
      )}
    </g>);
  }

  return renderText(children, cx, cy, rot, stroke);
}
AxisLabel.propTypes = {
  axisType: PropTypes.oneOf(['yAxis', 'xAxis']),
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  stroke: PropTypes.string,
  children: PropTypes.any,
};

class MusherLineChart extends Component {
	render () {
  	return (
      <div className="area-chart-wrapper" style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer>
      <LineChart width={300} height={300} margin={{top: 30, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
        <XAxis dataKey="time" type="time" domain={[0, 50]} ticks={[10, 20, 30, 40, 50]} label={<AxisLabel axisType="xAxis"  x={50} y={350} width={0} height={0}>Time (hours)</AxisLabel>}/>
         <YAxis  dataKey="dist"  type="number"  allowDuplicatedCategory={false} domain={[0, 338]} label={<AxisLabel axisType="yAxis" x={25} y={150} width={0} height={0}>{['Distance Travelled', 'km']}</AxisLabel>}/>
        <Tooltip/>
        <Legend/>
        {series.map(s => (
          <Line type="monotone" dataKey="dist" data={s.data} name={s.year} key={s.year} stroke="#4e7590"  strokeWidth="2" />
        ))}
          <ReferenceLine y={80.4} stroke="red" strokeWidth="0.5" label={{ position: "end", value: "Fortymile in", fill:"red" }}  />
          <ReferenceLine y={159.87} stroke="red" strokeWidth="0.5" label={{ position: "top", value: "Eagle", fill:"red" }} />
          <ReferenceLine y={240.27} stroke="red" strokeWidth="0.5" label={{ position: "top", value: "Fortymile out", fill:"red" }} />
          <ReferenceLine y={338} stroke="red" strokeWidth="0.5" label={{ position: "top", value: "Finish", fill:"red" }} />
      </LineChart>
      </ResponsiveContainer>
      </div>
    )}
}

export default MusherLineChart