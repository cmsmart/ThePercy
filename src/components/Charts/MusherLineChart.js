import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, Label } from "recharts"
import { event_ids } from "../../api/event_id"
import { compareObjectValues } from "../../utils/compareObjectValues"
import { generateData } from '../../utils/generateLineChartData'
import { getRaceDataByMusher } from "../../api/races";

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

const data = generateData(event_updates, "event_id")
// console.log('musher data: ', data)

const MusherLineChart = props => {
  const data = generateData({props}, "event_id")
  console.log('musher data: ', data)
  return <div className="line-chart-wrapper">
      <h3>Past Race Results</h3>
      <ResponsiveContainer padding="1rem">
        <LineChart margin={{ top: 40, right: 20, left: 30, bottom: 90 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis dataKey="time" type="number" domain={[0, 42]} ticks={[10, 20, 30, 40, 50]}>
            <Label offset={-25} position="insideBottom">
              Time
            </Label>
          </XAxis>
          <YAxis dataKey="dist" type="number" allowDuplicatedCategory={false} domain={[0, 340]} ticks={[80.4, 159.8, 239.2, 320]}>
            <Label angle={-90} offset={-10} position="insideLeft" style={{ textAnchor: "middle" }}>Distance (km)</Label>
          </YAxis>
          {/* <Tooltip /> */}
          <Legend layout="vertical" verticalAlign="middle" align="right" content={renderLegend} />
          {data.map(s => <Line // {...props}
              dataKey="distance" data={s.data
                .slice()
                .sort(
                  compareObjectValues("time")
                )} name={s.event_id} key={s.event_id} />)}
          {EventColor.map(event => (
            <Line
              key={event.event_id}
              stroke={event.lineColor}
              name={event.event_id}
            />
          ))}
          <ReferenceLine y={80.4} stroke="#0C2639" label={{ position: "insideTopRight", value: "Fortymile Inbound", fontSize: "0.8em", scaleToFit: true }} />
          <ReferenceLine y={159.87} stroke="#0C2639" label={{ position: "insideTopRight", value: "Eagle", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
          <ReferenceLine y={240.27} stroke="#0C2639" label={{ position: "insideTopRight", value: "Fortymile Outbound", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
          <ReferenceLine y={338} stroke="#0C2639" label={{ position: "insideTopRight", value: "Finish Dawson", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
        </LineChart>
      </ResponsiveContainer>
    </div>;
};

export default MusherLineChart;
