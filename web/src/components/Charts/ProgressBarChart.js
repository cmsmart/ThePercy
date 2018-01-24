import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine, Label, ResponsiveContainer, Cell } from 'recharts'
import {compareObjectValues} from "../../utils/compareObjectValues";
import { generateData } from '../../utils/generateProgressBarData';
//import { getMushers } from '../api/po_by_mushers'

//  const  experienceFilter = (mushers, pastmushers) => {
//         let experienceArray = []
//         mushers.map((datum) => {
//             if (pastmushers.some((object) => (object.musher_id === datum.musher_id))) {
//                 experienceArray = [ ...experienceArray, { name: datum.musher, experience: true } ]
//             } else {
//                 experienceArray = [ ...experienceArray, { name: datum.musher, experience: false } ]
//             }
//             return experienceArray
//         })
//         return experienceArray
//     }

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
  let sortedData = payload.slice().sort(compareObjectValues("bib"));
  let data = payload.slice().sort(compareObjectValues("value"));
  // console.log('sorted data', data)
  let name = "";
  let bib = ""
  return (
    <ul className="legend">
      {data.map((entry, index) => {
          name = entry.payload.data[0].musher_name
          bib = entry.payload.data[0].bib
        return (
          <li key={`item-${index}`} style={{ color: `${ColorArray[index]}` }}>
            {bib}: {name}
          </li>
        );
      })}
    </ul>
  );
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
      <div className="area-chart-wrapper" style={{ height: "500px" }}>
        <ResponsiveContainer>
          <LineChart height={300} margin={{ top: 50, right: 50, left: 50, bottom: 100 }}>
            <XAxis dataKey="distance" type="number" domain={[0, 320]} unit="km" ticks={[80.4, 159.8, 239.2, 320]}>
              <Label value="Distance (km)" offset={-15} position="insideBottom" />
            </XAxis>

            <YAxis type="category" dataKey="bib">
              <Label value="Bib Number" angle={-90} position="insideLeft" style={{ textAnchor: "middle" }} />
            </YAxis>

            <Tooltip content={<CustomTooltip />} />

            {dataseries.map((s, index) => (
              <Line
                dataKey="bib"
                data={s.data.slice().sort(compareObjectValues("time"))}
                name={s.bib}
                key={index}
                strokeWidth="1"
                stroke="#008080"
                dot={{ strokeWidth: 1, r: 2 }}
                stroke={ColorArray[index]}
              />
            ))}

            {/* <Line datakey="bib">
          {dataseries.map((entry, index) => {
            return <Cell key={index} fill={experienceFilter.experience  ? "#0c2639" : "#c3d8ec"}/>
          })}
        </Line> */}

            <Legend layout="vertical" verticalAlign="middle" align="right" content={renderLegend} {...props} />

            <ReferenceLine x={80.4} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: "0.8em", fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine x={159.8} stroke="#FA5252" label={{ position: "top", value: "Eagle", fontSize: "0.8em", fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine x={239.2} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: "0.8em", fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine x={320} stroke="#FA5252" label={{ position: "top", value: "Dawson", fontSize: "0.8em", fill: "#FA5252", scaleToFit: true }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>;}


export default ProgressBarChart

