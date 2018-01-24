import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Label, ResponsiveContainer, activeDot } from 'recharts'
import {compareObjectValues} from "../../utils/compareObjectValues";
import { generateData } from '../../utils/generateProgressBarData';
//import { getMushers } from '../api/po_by_mushers'
import  { LabelAsPoint } from '../../utils/LabelAsPoint';

 const  experienceFilter = (mushers, pastmushers) => {
        let experienceArray = []
        mushers.map((datum) => {
            if (pastmushers.some((object) => (object.musher_id === datum.musher_id))) {
                experienceArray = [ ...experienceArray, { name: datum.musher, experience: true } ]
            } else {
                experienceArray = [ ...experienceArray, { name: datum.musher, experience: false } ]
            }
            return experienceArray
        })
        return experienceArray
    }

    const ExperienceColour = [
      { experience: true, lineColor: "#5f4b8b" },
      { experience: false, lineColor: "#88b04b" }
    ];
    {/*dataseries.map((entry, index) => {
      <Line datakey="musher_id"
          stroke={experienceArray.forEach((musher) => {
            if (entry.musher_id === musher.musher_id && musher.experience === true) {
              stroke="#0c2639"
            }
            else {
              stroke="#c3d8ec"
            }
          })} />
        })*/}


class CustomTooltip extends Component {
  render() {
   const { active, payload, label } = this.props;
      console.log(payload)
      if (active) {
        // const { payload, label, name } = this.props;
        return (
          <div className="custom-tooltip">
   



<p className="label">{`${payload[0].payload.musher_name} `}</p>  
<p className="label">{`Bib: ${payload[0].payload.bib} `}</p>  
<p className="label"> { ` Distance (km): ${payload[0].payload.distance.toFixed(2)}`}</p> 
<p className="label"> { ` Time (hrs): ${payload[0].payload.time} `}</p>  
</div>
              
            );
          }
        return null;
        }
      }


const ProgressBarChart = (props) => {
    const payload = this.props;
    const datas = generateData(props.raceData, "musher_id")
    const dataseries = datas.slice().sort(compareObjectValues("bib"))
    console.log(dataseries)
  return (
    <div className="outer-wrapper">
    <h2>Musher Progress</h2>
    <div className="area-chart-wrapper" style={{  height: "500px"}} >
      <ResponsiveContainer>
        <LineChart height={300} margin={{top: 50, right: 50, left: 50, bottom: 100}}>
          <XAxis dataKey="distance" type="number" domain={[0, 320]}  unit="km" ticks={[80.4, 159.8, 239.2, 320]}>
            <Label value="Distance (km)" offset={-15} position="insideBottom" />
          </XAxis>

          <YAxis type="number" dataKey="bib" ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} >
            <Label value="Bib Number" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
          </YAxis>

        <Tooltip content={<CustomTooltip />}/>

        <Label/>
                
        {dataseries.map(s => (
          <Line dataKey="bib" data={s.data} name={s.bib} key={s.bib} strokeWidth="1" stroke="#008080" dot={{strokeWidth: 1, r: 2}} activeDot={false} label={ <LabelAsPoint /> }
          activeDot={false}/>
        ))}

        {/*<Line datakey="bib">
          {series.map((entry, index) => {
            return <Cell fill={experienceFilter.experience  ? "#0c2639" : "#c3d8ec"}/>
          })}
        </Line>*/}

        <Legend layout="vertical" verticalAlign="middle" align="right" />
          
            <ReferenceLine x={80.4} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em',  fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine x={159.8} stroke="#FA5252" label={{ position: "top", value: "Eagle", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine x={239.2} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
            <ReferenceLine x={320} stroke="#FA5252" label={{ position: "top", value: "Dawson", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
    )}


export default ProgressBarChart
