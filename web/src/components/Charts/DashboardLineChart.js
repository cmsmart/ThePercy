import React, { Component } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine, ResponsiveContainer, Label } from "recharts";
import { compareObjectValues } from "../../utils/compareObjectValues";
import { generateData } from "../../utils/generateLineChartData";

const ColorArray = [
  "#5F4690",
  "#1D6996",
  "#38A6A5",
  "#0F8554",
  "#73AF48",
  "#EDAD08",
  "#E17C05",
  "#CC503E",
  "#94346E",
  "#7F3C8D",
  "#11A579",
  "#3969AC",
  "#F2B701",
  "#E73F74",
  "#80BA5A",
  "#E68310",
  "#008695",
  "#CF1C90",
  "#f97b72",
  "#4b4b8f",
  "#A5AA99"
];

const renderLegend = props => {
  const { payload, mushers } = props;
  let name = ''
  return (
    <ul className="legend">
      {payload.map((entry, index) => {
        mushers.map(musher => {
          if (musher.musher_id === entry.value) {
            name = musher.musher
          } 
          return name
        })
        return <li key={`item-${index}`} style={{color: `${ColorArray[index]}`}}>{name}</li>
      }
      )}
    </ul>
  )
}

class CustomTooltip extends Component {
  render() {
    const { active, payload } = this.props;
    console.log('linechart payload', payload);

    if (active) {
      // const { payload, label, name } = this.props;
      return (
        <div className="custom-tooltip">
          <p className="label">{` Musher: ${payload[0].payload.musher_name} `}</p>
          <p className="label">
            {" "}
            {` Distance (km): ${payload[0].payload.distance.toFixed(2)}`}
          </p>
          <p className="label"> {` Time (hrs): ${payload[0].payload.time} `}</p>
        </div>
      );
    }
    return null;
  }
}

const DashboardLineChart = props => {
    const data = generateData(props.raceData, "musher_id");
  	return <div className="outer-wrapper">
        <h2>{props.children}</h2>
        <p className="explanatory">Includes mandatory 6 hr layover in Eagle, 2 hr layover in Fortymile or Eagle.</p>
        <div className="line-chart-wrapper">
          <ResponsiveContainer padding="1rem">
            <LineChart margin={{ top: 30, right: 30, left: 50, bottom: 30 }}>
              {/* <CartesianGrid strokeDasharray="3 3" horizontal={false} /> */}
              <XAxis dataKey="time" type="number" domain={[0, 42]} ticks={[10, 20, 30, 40]}>
                <Label offset={-25} position="insideBottom">
                  Time (h)
                </Label>
              </XAxis>
              <YAxis dataKey="dist" type="number" allowDuplicatedCategory={false} domain={[0, 340]} ticks={[80.4, 159.8, 239.2, 320]}>
                <Label angle={-90} offset={-10} position="insideLeft" style={{ textAnchor: "middle" }}>
                  Distance (km)
                </Label>
              </YAxis>

              <Tooltip content={<CustomTooltip />} />
              <Legend layout="vertical" verticalAlign="middle" wrapperStyle={{ left: 120, top: 30 }} content={renderLegend} {...props} />
              {data.map((s, index) => (
                <Line
                  dataKey="distance"
                  data={s.data.slice().sort(compareObjectValues("time"))}
                  name={s.musher_id}
                  key={s.musher_id}
                  stroke={ColorArray[index]}
                  dot={false}
                  strokeWidth="2"
                />
              ))}
              <ReferenceLine y={80.4} stroke="#b6bdc3" label={{ position: "insideBottomRight", value: "Fortymile", fontSize: "0.8em", scaleToFit: true }} />
              <ReferenceLine y={159.87} stroke="#b6bdc3" label={{ position: "insideBottomRight", value: "Eagle", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
              <ReferenceLine y={240.27} stroke="#b6bdc3" label={{ position: "insideBottomRight", value: "Fortymile", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
              <ReferenceLine y={320} stroke="#b6bdc3" label={{ position: "insideBottomRight", value: "Dawson", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>;
    }
    



export default DashboardLineChart