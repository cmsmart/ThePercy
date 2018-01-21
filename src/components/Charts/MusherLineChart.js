import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, Label } from "recharts"

import { event_ids } from "../../api/event_id"

import { compareObjectValues } from "../../utils/compareObjectValues"

const renderLegend = props => {
  const { payload } = props;
  let backgroundColor = "";
  return (
    <ul className="legend">
      {payload.map((entry, index) =>
        event_ids.map(event => {
          if (event.event_id === entry.value) {
            EventColor.map(e => {
              if (e.event_id === entry.value) {
                return (backgroundColor = `${e.lineColor}`);
              }
            });
            return (
              <li
                key={`item-${index}`}
                style={{ color: `${backgroundColor}` }}
              >
                {event.year}
              </li>
            );
          }
        })
      )}
    </ul>
  );
};

const EventColor = [
  { event_id: 119, lineColor: "#5f4b8b" },
  { event_id: 117, lineColor: "#88b04b" },
  { event_id: 115, lineColor: "#91a8d0" },
  { event_id: 113, lineColor: "#964f4c" },
  { event_id: 111, lineColor: "#ad5e99" },
  { event_id: 109, lineColor: "#009473" },
  { event_id: 107, lineColor: "#dd4124" }
];

const MusherLineChart = props => {
  return <div className="line-chart-wrapper">
      <h3>Past Race Results</h3>
      <ResponsiveContainer padding="1rem" style={{ height: "500px" }}>
        <LineChart margin={{ top: 40, right: 20, left: 30, bottom: 90 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis dataKey="time" type="number" domain={[0, 50]} ticks={[10, 20, 30, 40, 50]}>
            <Label offset={-25} position="insideBottom">
              Time
            </Label>
          </XAxis>
          <YAxis dataKey="distance" type="number" allowDuplicatedCategory={false} domain={[0, 338]}>
            <Label angle={-90} offset={10} position="insideBottomLeft">
              Distance (kms)
            </Label>
          </YAxis>
          <Tooltip />
          <Legend layout="vertical" verticalAlign="middle" align="right" content={renderLegend} />
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
            />
          ))}
          <ReferenceLine y={80.4} stroke="#0C2639" strokeWidth="2" label={{ position: "top", value: "Fortymile Inbound", fontSize: "0.8em", scaleToFit: true }} />
          <ReferenceLine y={159.87} stroke="#0C2639" label={{ position: "top", value: "Eagle", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
          <ReferenceLine y={240.27} stroke="#0C2639" label={{ position: "top", value: "Fortymile Outbound", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
          <ReferenceLine y={338} stroke="#0C2639" label={{ position: "top", value: "Finish Dawson", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
        </LineChart>
      </ResponsiveContainer>
    </div>;
};

export default MusherLineChart;
