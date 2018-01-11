import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, Legend } from 'recharts'
import { ResponsiveContainer } from 'recharts';

const Recharts = {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, Legend};
const data = [
      {name: '2000', place: 1, runtime: 28.36},
      {name: '2001', place: 10, runtime: 24.60},
      {name: '2002', place: 0, runtime: 30.20},
      {name: '2003', place: 1, runtime: 24.36},
      {name: '2004', place: 1, runtime: 26.36},
      {name: '2005', place: 1, runtime: 30.36},
      {name: '2006', place: 1, runtime: 24.11},
      {name: '2007', place: 3, runtime: 26.36},
      {name: '2008', place: 4, runtime: 22.36},
      {name: '2009', place: 1, runtime: 30.09},
      {name: '2010', place: 4, runtime: 35.36},
      {name: '2011', place: 1, runtime: 28.36},
      {name: '2012', place: 1, runtime: 34.12},
      {name: '2013', place: 4, runtime: 28.36},
      {name: '2014', place: 1, runtime: 32.36},
      {name: '2015', place: 1, runtime: 24.33},
      {name: '2016', place: 1, runtime: 22.36},
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value}
      </text>
    </g>
  );
};

class SimpleBarChart extends Component {
	render () {
  	return (
        <div className="area-chart-wrapper" style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer>
                <BarChart width={800} height={300} data={data} maxBarSize={20}
                margin={{top: 15, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis domain={[20]}/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend value={'sss'}/>
                    <Bar dataKey="runtime" fill="#8884d8" minPointSize={1}>
                        <LabelList dataKey="place" content={renderCustomizedLabel} />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
  }
}

export default SimpleBarChart