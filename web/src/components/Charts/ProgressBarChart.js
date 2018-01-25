import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine, Label, ResponsiveContainer } from 'recharts'
import {compareObjectValues} from "../../utils/compareObjectValues";
import { generateData } from '../../utils/generateProgressBarData';
//import { getMushers } from '../api/po_by_mushers'

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
  const dataseries = generateData(props.raceData, "musher_id");
  let name = "";
  let bib = ""
  let dataSet = [];
  const fetchAndSortData = () => {
    dataseries.map(datum => {
      name = datum.data[0].musher_name;
      bib = datum.data[0].bib;
      return dataSet = [...dataSet, { bib_no: bib, name: name }];
  })
  let sortedData = dataSet.sort(compareObjectValues("bib_no")).reverse()
  return sortedData
}
  return (
    <ul className="progress-bar-legend">
      {fetchAndSortData().map((entry, index) => {          
        return (
          <li key={`item-${index}`} 
          style={{ color: `${ColorArray[entry.bib_no]}` }}
          >
            {entry.bib_no}: {entry.name}
          </li>
        )
      })}
    </ul>
  )
};

class CustomTooltip extends Component {
  render() {
   const { active, payload } = this.props; 
    
    if (active && payload !== null && payload !== undefined) {
      return <div className="custom-tooltip">
          <p className="label">{`${payload[0].payload.musher_name} `}</p>
          <p className="label">{`Bib: ${payload[0].payload.bib} `}</p>
          <p className="label">
            {" "}
            {` Distance (km): ${payload[0].payload.distance}`}
          </p>
          <p className="label">
            {" "}
            {` Time (hrs): ${payload[0].payload.time} `}
          </p>
        </div>;
    }
        return null;
        }
      }
  
const ProgressBarChart = (props) => {
    const dataseries = generateData(props.raceData, "musher_id")
  return <div className="outer-wrapper">
      <h2>Musher Progress</h2>
      <p className="explanatory">Includes mandatory 6 hr layover in Eagle, additional 2 hr layover in Fortymile or Eagle.</p>
      <div className="area-chart-wrapper" style={{ height: "500px" }}>
        <ResponsiveContainer>
          <LineChart height={300} margin={{ top: 50, right: 50, left: 50, bottom: 100 }}>
            <XAxis dataKey="distance" type="number" domain={[0, 320]} unit="km" ticks={[80.4, 159.8, 239.2, 320]}>
              <Label value="Distance (km)" offset={-15} position="insideBottom" />
            </XAxis>
            <YAxis type="number" dataKey="bib" ticks={[2, 3, 4, 5, 6, 7, 8, 9, 10]}>
              <Label value="Bib Number" angle={-90} position="insideLeft" style={{ textAnchor: "middle" }} />
            </YAxis>
            {/* <Tooltip content={<CustomTooltip />} /> */}
            <Label />

            {dataseries.map((s, index) => (
              <Line
                dataKey="bib"
                data={s.data.slice().sort(compareObjectValues("time"))}
                name={s.bib}
                key={index}
                strokeWidth="1"
                // stroke="#008080"
                dot={{ strokeWidth: 1, r: 2 }}
                stroke={ColorArray[s.data[0].bib]}
              />
            ))}
            <Legend layout="vertical" verticalAlign="middle" align="right" content={renderLegend} {...props} />
            <ReferenceLine x={0} stroke="#0C2639" label={{ position: "top", value: "Start: Dawson", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
            <ReferenceLine x={80.4} stroke="#0C2639" label={{ position: "top", value: "Fortymile", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
            <ReferenceLine x={159.8} stroke="#0C2639" label={{ position: "top", value: "Eagle", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
            <ReferenceLine x={239.2} stroke="#0C2639" label={{ position: "top", value: "Fortymile", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
            <ReferenceLine x={320} stroke="#0C2639" label={{ position: "top", value: "Finish: Dawson", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>;    
}


export default ProgressBarChart
