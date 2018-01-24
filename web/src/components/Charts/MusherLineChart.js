import React, { Component } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, Label } from "recharts"
import { event_ids } from "../../utils/getRaceID"
import { compareObjectValues } from "../../utils/compareObjectValues"
import { generateData } from '../../utils/generateLineChartData'

const renderLegend = props => {
  const { payload } = props;
  let backgroundColor = "";
  let year = "";
  let data = payload.slice().sort(compareObjectValues("value"))
  return (
    <ul className="legend">
      {data.map((entry, index) => {
        if (entry.dataKey) {
        event_ids.map(event => {
          if (event.event_id === entry.value) {
            EventColor.map(e => {
              if (e.event_id === entry.value) {
                backgroundColor = `${e.lineColor}`
              }
              return backgroundColor
            })
            year = event.year
          }
          return year
        }
      )
      return (
        <li
          key={`item-${index}`}
          style={{ color: `${backgroundColor}` }}
        >{year}</li>
      )
    }}
  )
  }
    </ul>
  );
};

class CustomTooltip extends Component {
  render() {
    const { active } = this.props;
    const { payload } = this.props;
    
    const getEventName = id => {
      let eventName = "";
      event_ids.map(event => {
        if (event.event_id === id) {
          eventName = event.year;
        }
      });
      return eventName;
    };

    if (active && payload[0] !== undefined) {
      return (
        <div className="custom-tooltip">
          {/* <p className="label">Year: {`${getEventName(payload[0].name)}`}</p> */}
          <p>Time: {`${payload[0].payload.time} `}</p>
          <p>Distance: {`${payload[0].payload.distance.toFixed(2)}`}kms</p>
          {/* {console.log(payload[0].name)} */}
        </div>
      );
    }
    return null;
  }
}

const EventColor = [
  { event_id: 121, lineColor: "#CC503E" },
  { event_id: 119, lineColor: "#5F4690" },
  { event_id: 117, lineColor: "#1D6996" },
  { event_id: 115, lineColor: "#38A6A5" },
  { event_id: 113, lineColor: "#0F8554" },
  { event_id: 111, lineColor: "#73AF48" },
  { event_id: 109, lineColor: "#EDAD08" },
  { event_id: 107, lineColor: "#E17C05" }
];

const MusherLineChart = props => {
  const data = generateData(props.raceData.data, "event_id")
  return (
    <div className="outer-wrapper">
    <h2>Performance</h2>
     <div className="line-chart-wrapper">
        <ResponsiveContainer padding="1rem">
          <LineChart margin={{ top: 40, right: 20, left: 30, bottom: 90 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis dataKey="time" type="number" domain={[0, 42]} ticks={[10, 20, 30, 40]}>
              <Label offset={-25} position="insideBottom">
                Time
              </Label>
            </XAxis>
            <YAxis dataKey="dist" type="number" allowDuplicatedCategory={false} domain={[0, 320]} ticks={[80.4, 159.8, 239.2, 320]}>
              <Label angle={-90} offset={-10} position="insideLeft" style={{ textAnchor: "middle" }}>
                Distance (km)
              </Label>
            </YAxis>
            <Tooltip 
            content={<CustomTooltip />}
            />
            <Legend layout="vertical" verticalAlign="middle" wrapperStyle={{left: 120, top: 40}} content={renderLegend} />
            {data.map(s => (
              <Line // {...props}
                dataKey="distance"
                data={s.data.slice().sort(compareObjectValues("time"))}
                name={s.event_id}
                key={s.event_id}
                dot={false}
              />
            ))}
            {EventColor.map(event => (
              <Line
                key={event.event_id}
                stroke={event.lineColor}
                name={event.event_id}
                dot={false}
                strokeWidth='2'
              />
            ))}
            <ReferenceLine y={80.4} stroke="#0C2639" label={{ position: "insideTopRight", value: "Fortymile Inbound", fontSize: "0.8em", scaleToFit: true }} />
            <ReferenceLine y={159.87} stroke="#0C2639" label={{ position: "insideTopRight", value: "Eagle", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
            <ReferenceLine y={240.27} stroke="#0C2639" label={{ position: "insideTopRight", value: "Fortymile Outbound", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
            <ReferenceLine y={320} stroke="#0C2639" label={{ position: "insideTopRight", value: "Finish Dawson", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
};

export default MusherLineChart;