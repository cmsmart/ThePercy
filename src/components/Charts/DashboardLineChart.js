import React from "react";
import { LineChart, Line, XAxis, YAxis,   CartesianGrid, Tooltip, Legend, ReferenceLine,   ResponsiveContainer, Label } from "recharts";
import { getMushers } from "../../api/mushers";
import { compareObjectValues } from "../../utils/compareObjectValues";

let musher_ids = []
getMushers()
  .then((res) => {
    musher_ids = res
  })

const renderLegend = props => {
  const { payload } = props;
  let backgroundColor = "";
  return (
    <ul className="legend">
      {payload.map((entry, index) =>
        musher_ids.map(musher => {
          if (musher.musher_id === entry.value) {
            NameColor.map(e => {
              if (e.name === entry.value) {
                return (backgroundColor = `${e.lineColor}`);
              }
            });
            return (
              <li key={`item-${index}`} style={{ color: `${backgroundColor}` }}>
                {musher.name}
              </li>
            );
          }
        })
      )}
    </ul>
  );
};

const series = [
  {name: 'Cho', data: [
    {time: '0', dist: 0 },
    {time: '30', dist: 152.7},
    {time: '50', dist: 338}
  ]},
  {name: 'Hannah', data: [
    {time: '0', dist: 0 },
    {time: '30', dist: 152.7},
    {time: '45', dist: 338}
  ]},
  {name: 'Carl', data: [
    {time: '0', dist: 0 },
    {time: '13', dist: 12.4},
    {time: '18', dist: 25.7},
    {time: '28', dist: 137.8 },
    {time: '30', dist: 145.8},
    {time: '45', dist: 338}
  ]},
  {name: 'Gretchen', data: [
    {time: '0', dist: 0 },
    {time: '15', dist: 7.4},
    {time: '50', dist: 338}
  ]},
];

const NameColor = [
  {name: "Cho", lineColor: "#5f4b8b"},
  {name: "Hannah", lineColor: "#88b04b"},
  {name: "Carl", lineColor: "#91a8d0"},
  {name: "Gretchen", lineColor: "#964f4c"},
  {name: "George", lineColor: "#ad5e99"},
  {name: "Julia", lineColor: "#009473"},
  {name: "Nick", lineColor: "#dd4124"}
]

const DashboardLineChart = props => {
  	return <div className="Line-chart-wrapper" style={{ width: "45%", height: "400px", backgroundColor: "#f8f8f8", border: "1px solid black", margin: "10px" }}>
      <ResponsiveContainer padding="1rem">
        <LineChart width={300} height={300} margin={{top: 30, right: 30, left: 50, bottom: 50}}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
          <XAxis dataKey="time" type="number" domain={[0, 50]}  ticks={[10, 20, 30, 40, 50]}>
            <Label offset={-45} position="insideBottom" />
          </XAxis>
          <YAxis  dataKey="dist"  type="number"  allowDuplicatedCategory={false} domain={[0, 320]} ticks={[80.4, 159.8, 239.2, 320]} >
            <Label angle={-90} offset={-10} position="insideLeft" style={{ textAnchor: 'middle' }}/> 
          </YAxis>
          <Tooltip/>
          <Legend layout="vertical" verticalAlign="bottom" align="left" content={renderLegend} />
          {series.map(s => (
            <Line dataKey="dist" data={s.data} name={s.name} key={s.name} type="natural"/> 
          ))}
          {NameColor.map(name => (
             <Line key={name.name} stroke={name.lineColor} name={name.name} strokeWidth="2" />
          ))}
            <ReferenceLine y={80.4} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em',  fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine y={159.8} stroke="#FA5252" label={{ position: "top", value: "Eagle", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine y={239.2} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine y={320} stroke="#FA5252" label={{ position: "top", value: "Finish Dawson", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    }


export default DashboardLineChart