import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ReferenceLine } from 'recharts'
import { ResponsiveContainer } from 'recharts';

 const Recharts = {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ReferenceLine};
const data = [
      {name: 'Cho', distance: 337, experience: 'vetran'},
      {name: 'Pat', distance: 110, experience: 'rookie'},
      {name: 'Matt', distance: 230, experience: 'vetran'},
      {name: 'Carl', distance: 300, experience: 'rookie'},
      {name: 'Hannah', distance: 205, experience: 'vetran'},
      {name: 'Frank', distance: 190, experience: 'vetran'},
      {name: 'Clayton', distance: 99, experience: 'rookie'},
      {name: 'Gretchen', distance: 5, experience: 'vetran'}
];

class ProgressBarChart extends Component {
	render () {
  	return (
      <div className="area-chart-wrapper" style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer>
    	<BarChart width={600} height={400} data={data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}
            layout="vertical">
    	  <XAxis type="number" domain={[0, 338]} />
       	<YAxis type="category" dataKey="name" />
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="distance" fil4="#8884d8">
       		{
          	data.map((entry, index) => { 
            	return <Cell fill={data[index].experience === 'vetran' ? '#4e7590' : '#C3D8EC' } />;
            })
          }
        </Bar>
        <ReferenceLine x={80.4}  stroke="red" label={{ position: "top", value: "Fortymile in", fill:"red" }}  />
        <ReferenceLine x={159.87}  stroke="red" label={{ position: "top", value: "Eagle", fill:"red" }} />
        <ReferenceLine x={240.27} stroke="red" label={{ position: "top", value: "Fortymile out", fill:"red" }} />
      </BarChart>
      </ResponsiveContainer>
      </div>
    )}
  }

  export default ProgressBarChart