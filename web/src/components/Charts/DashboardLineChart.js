import React, { Component } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine,   ResponsiveContainer, Label } from "recharts";
import { compareObjectValues } from "../../utils/compareObjectValues";
import { generateData } from "../../utils/generateLineChartData";

const ColorArray = ['#5F4690','#1D6996','#38A6A5','#0F8554','#73AF48','#EDAD08','#E17C05','#CC503E','#94346E','#6F4070','#994E95','#666666']

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

// class CustomTooltip extends Component {
//   render() {
//     const { active } = this.props;
//     const { payload, mushers } = this.props;
//     console.log('payload', payload)
//     const getMusherName = (id) => {
//       let name = ''
//       mushers.map(musher => {
//         if (musher.musher_id === id) {
//           name = musher.musher
//         }
//         return name
//       })
//       return name
//     }
//     if (active && payload[0] !== undefined) {
//       return <div className="custom-tooltip">
//           <p className="label">Musher: {`${payload[0].payload.name}`}</p>
//           <p>Distance: {`${payload[0].payload.distance}`}kms</p>
//           <p>Time: {`${payload[0].payload.time} `}</p>
//         </div>;
//     }
//     return null;
//   }
// } 

const DashboardLineChart = props => {
    console.log(props)
    console.log("raceData", props.raceData);
    const data = generateData(props.raceData, "musher_id");
    console.log("event data: ", data);
  	return <div className="line-chart-wrapper">
        <h3>Musher Performance</h3>
        <ResponsiveContainer padding="1rem">
          <LineChart margin={{ top: 40, right: 20, left: 30, bottom: 90 }}>
            {/* <CartesianGrid strokeDasharray="3 3" horizontal={false} /> */}
            <XAxis dataKey="time" type="number" domain={[0, 42]} ticks={[10, 20, 30, 40]}>
              <Label offset={-25} position="insideBottom">
                Time
              </Label>
            </XAxis>
            <YAxis dataKey="dist" type="number" allowDuplicatedCategory={false} domain={[0, 340]} ticks={[80.4, 159.8, 239.2, 320]}>
              <Label angle={-90} offset={-10} position="insideLeft" style={{ textAnchor: "middle" }}>
                Distance (km)
              </Label>
            </YAxis>
            {/* <Tooltip content={<CustomTooltip />} {...props} /> */}
            <Legend layout="vertical" verticalAlign="middle" align="right" content={renderLegend} {...props} />
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
            <ReferenceLine y={80.4} stroke="#0C2639" label={{ position: "insideTopRight", value: "Fortymile Inbound", fontSize: "0.8em", scaleToFit: true }} />
            <ReferenceLine y={159.87} stroke="#0C2639" label={{ position: "insideTopRight", value: "Eagle", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
            <ReferenceLine y={240.27} stroke="#0C2639" label={{ position: "insideTopRight", value: "Fortymile Outbound", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
            <ReferenceLine y={320} stroke="#0C2639" label={{ position: "insideTopRight", value: "Finish Dawson", fontSize: "0.8em", fill: "#0C2639", scaleToFit: true }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      </div>
    )
    }


export default DashboardLineChart