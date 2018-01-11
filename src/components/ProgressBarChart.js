import React, { Component } from 'react'

// yarn add prop-types
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell, ReferenceLine, ResponsiveContainer, Label } from 'recharts'

const data = [
      {name: 'Cho', distance: 337, experience: 'veteran'},
      {name: 'Pat', distance: 110, experience: 'rookie'},
      {name: 'Matt', distance: 230, experience: 'veteran'},
      {name: 'Carl', distance: 300, experience: 'rookie'},
      {name: 'Hannah', distance: 205, experience: 'veteran'},
      {name: 'Frank', distance: 190, experience: 'veteran'},
      {name: 'Clayton', distance: 99, experience: 'rookie'},
      {name: 'Gretchen', distance: 5, experience: 'veteran'}
];

const MyLabel = (props) => {
  return <div>{props.value}</div>
}

const renderLegend = () => {
  return <div style={{ color: "#FA5252", display: "inline-block", padding: "0.5rem 1.2rem" }}>
      <p style={{ padding: "0.5rem 1.2rem 0.5rem 0.5rem", margin: 0 }}>Legend</p>
      <p
        style={{
          backgroundColor: "#C3D8EC",
          padding: "0.5rem 1.2rem 0.5rem 0.5rem",
          margin: "0.1rem"
        }}
      >
        Rookie
      </p>
      <p style={{ backgroundColor: "#0C2639", padding: "0.5rem 1.2rem 0.5rem 0.5rem", margin: "0.1rem" }}>
        Veteran
      </p>
    </div>;
}

class ProgressBarChart extends Component {
	render () {
  	return <div className="Bar-chart-wrapper" style={{ width: "95%", height: "400px", backgroundColor: "#f8f8f8", border: "1px solid black", margin: "10px" }}>
        <ResponsiveContainer padding="1rem">
          <BarChart width={600} height={400} data={data} margin={{ top: 30, right: 30, left: 50, bottom: 30 }} layout="vertical">
            <XAxis type="number" domain={[0, 338]}>
              <Label value="Distance" offset={-15} position="insideBottom" />
            </XAxis>
            <YAxis type="category" dataKey="name">
              <Label value="Mushers" angle={-90} offset={-35} position="insideLeft" />
            </YAxis>
            <Tooltip cursor={{ fill: "#eee" }} />
            <Legend layout="vertical" verticalAlign="middle" align="right" content={renderLegend} />
            <Bar dataKey="distance" maxBarSize={20}>
              {data.map((entry, index) => {
                return <Cell fill={data[index].experience === "veteran" ? "#0C2639" : "#C3D8EC"} />;
              })}
            </Bar>
            <ReferenceLine x={80.4} stroke="#FA5252" label={{ position: "top", value: "Fortymile In", fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine x={159.87} stroke="#FA5252" label={{ position: "top", value: "Eagle", fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine x={240.27} stroke="#FA5252" label={{ position: "top", value: "Fortymile Out", fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine x={338} stroke="#FA5252" label={{ position: "top", value: "Finish Dawson 210miles", fill: "#FA5252", scaleToFit: true }} />
          </BarChart>
        </ResponsiveContainer>
      </div>}
  }

  export default ProgressBarChart