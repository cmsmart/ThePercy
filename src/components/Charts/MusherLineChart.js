import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, Label} from 'recharts'

import { compareObjectValues } from '../../utils/compareObjectValues'

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

const EventColor = [
  {event_id: 119, lineColor: "#5f4b8b"},
  {event_id: 117, lineColor: "#88b04b"},
  {event_id: 115, lineColor: "#91a8d0"},
  {event_id: 113, lineColor: "#964f4c"},
  {event_id: 111, lineColor: "#ad5e99"},
  {event_id: 109, lineColor: "#009473"},
  {event_id: 107, lineColor: "#dd4124"}
]

const MusherLineChart = (props) => {
  return <div className="Line-chart-wrapper" style={{ width: "100%", height: "400px", backgroundColor: "#f8f8f8", border: "1px solid black", margin: "10px" }}>
    <ResponsiveContainer padding="1rem">
      <LineChart width={300} height={300} margin={{ top: 30, right: 30, left: 50, bottom: 50 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis dataKey="time" type="number" domain={[0, 50]} ticks={[10, 20, 30, 40, 50]}>
          <Label offset={-45} position="insideBottom" />
        </XAxis>
        <YAxis dataKey="distance" type="number" allowDuplicatedCategory={false} domain={[0, 338]}>
          <Label angle={-90} offset={-25} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="middle" align="left" content={RenderLegend} />
        {props.data.map(s => (
          <Line
            {...props}
            dataKey="distance"
            data={s.data.slice().sort(compareObjectValues("time"))}
            name={s.event_id}
            key={s.event_id}
          />
        ))}
        {EventColor.map(event => (
        <Line
          key={event.event_id}
          stroke={event.lineColor}
          name={event.event_id}
          strokeWidth="3"
          />
        )
        )}
        <ReferenceLine y={80.4} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: "0.8em", fill: "#FA5252", scaleToFit: true }} />
        <ReferenceLine y={159.87} stroke="#FA5252" label={{ position: "top", value: "Eagle", fontSize: "0.8em", fill: "#FA5252", scaleToFit: true }} />
        <ReferenceLine y={240.27} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: "0.8em", fill: "#FA5252", scaleToFit: true }} />
        <ReferenceLine y={338} stroke="#FA5252" label={{ position: "top", value: "Finish Dawson", fontSize: "0.8em", fill: "#FA5252", scaleToFit: true }} />
      </LineChart>
    </ResponsiveContainer>
  </div>

}

export default MusherLineChart