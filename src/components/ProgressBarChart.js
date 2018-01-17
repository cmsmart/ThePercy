import React, { Component } from 'react'
import { BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ReferenceLine, Label, ResponsiveContainer } from 'recharts'
//import { getMushers } from '../api/po_by_mushers'

const data = [
  {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 70186,
      "run_time_str": "04.54.30",
      "hours": 4.91
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 157683,
      "run_time_str": "13.13.59",
      "hours": 13.23
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 95747,
      "run_time_str": "08.44.17",
      "hours": 8.74
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 0,
      "run_time_str": "-00.23.24",
      "hours": -0.39
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 157683,
      "run_time_str": "13.23.59",
      "hours": 13.4
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 125228,
      "run_time_str": "10.54.13",
      "hours": 10.9
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 59009,
      "run_time_str": "04.04.39",
      "hours": 4.08
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 155499,
      "run_time_str": "13.04.03",
      "hours": 13.07
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 65469,
      "run_time_str": "04.34.30",
      "hours": 4.58
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 45794,
      "run_time_str": "03.04.36",
      "hours": 3.08
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 145651,
      "run_time_str": "12.24.03",
      "hours": 12.4
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 89491,
      "run_time_str": "08.14.19",
      "hours": 8.24
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 43601,
      "run_time_str": "02.54.36",
      "hours": 2.91
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 143367,
      "run_time_str": "12.14.03",
      "hours": 12.23
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 122927,
      "run_time_str": "10.44.13",
      "hours": 10.74
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 41240,
      "run_time_str": "02.44.36",
      "hours": 2.74
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 142658,
      "run_time_str": "12.04.25",
      "hours": 12.07
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 80841,
      "run_time_str": "05.44.21",
      "hours": 5.74
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 34560,
      "run_time_str": "02.14.42",
      "hours": 2.25
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 140028,
      "run_time_str": "11.54.01",
      "hours": 11.9
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 112028,
      "run_time_str": "09.54.19",
      "hours": 9.91
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 61448,
      "run_time_str": "04.15.59",
      "hours": 4.27
      },
      {
      "event_id": 117,
      "musher_id": "106",
      "run_dist": 157683,
      "run_time_str": "14.04.00",
      "hours": 14.07
      },
      {
      "event_id": 119,
      "musher_id": "106",
      "run_dist": 243399,
      "run_time_str": "30.20.16",
      "hours": 30.34
      },
      {
      "event_id": 119,
      "musher_id": "106",
      "run_dist": 265189,
      "run_time_str": "31.50.07",
      "hours": 31.84
      },
      {
      "event_id": 119,
      "musher_id": "106",
      "run_dist": 278007,
      "run_time_str": "32.49.23",
      "hours": 32.82
      },
      {
      "event_id": 119,
      "musher_id": "106",
      "run_dist": 245997,
      "run_time_str": "30.30.10",
      "hours": 30.5
      },
      {
      "event_id": 119,
      "musher_id": "106",
      "run_dist": 239110,
      "run_time_str": "27.55.11",
      "hours": 27.92
      },
      {
      "event_id": 119,
      "musher_id": "106",
      "run_dist": 282569,
      "run_time_str": "33.09.16",
      "hours": 33.15
      },
      {
      "event_id": 119,
      "musher_id": "106",
      "run_dist": 239107,
      "run_time_str": "27.45.13",
      "hours": 27.75
      },
]
  
const generateProgressDistanceData = (data) => {
let filteredArray = data.filter((datum) => datum.run_dist === '1')

filteredArray.map((musher_id, run_dist) => {
  return run_dist = run_dist.map((run_dist) => {
    if (musher_id === musher_id) {
            run_dist = Object.assign({}, run_dist, ...run_dist, { [musher_id]: parseFloat((musher_id.run_dist).replace(/:/gi, '.')) })
        }
        return musher_id
        })
    })
}

function metresToKm(run_dist) {
  return (run_dist / 1000).toFixed(1);
} 

function rookieOrNot(musher_id, event_id) {
 // map through past race event_id, 
 //does musher_id occur more than once for previous percy event_ids?
 //if yes, vetran
 //else rookie
 return 
   // push status back to musher_id
 
}

const renderLegend = () => {
  return <div style={{ color: "#191919", display: "inline-block", padding: "0.3rem 1.2rem", }}>
    <p style={{ padding: "0.3rem 1.2rem", textAnchor: 'middle', margin: 0,fontSize: '0.8em',textAlign: 'center', fontWeight: 'bold',}}>
    Legend</p>
    <p style={{ backgroundColor: "#b5b991", padding: "0.5rem 1.2rem", margin: "0.1rem", textAnchor: 'middle', fontSize: '0.8em', textAlign: 'center'}}
    > Rookie </p>
    <p style={{ textAlign: 'center', color: '#fff', backgroundColor: "#3d5941", fontSize: '0.8em', padding: "0.5rem 1.2rem", textAnchor: 'middle', margin: "0.1rem" }}
    > Veteran</p>
  </div>
}

export default class ProgressBarChart extends Component {
  state = {
      mushers: null,
      data: null
    }
  
    componentDidMount() {
      getMushers().then((res) => {
        this.setState({ mushers: res })
      }).then(() => {
        this.setState({ data: generateProgressDistanceData(this.state.mushers) })
      })
    }

render () {
  return (
    <div className="area-chart-wrapper" style={{ width: '95%', height: "400px", backgroundColor: "#f8f8f8", border: "1px solid black", margin: "10px" }}>
      <ResponsiveContainer padding="1rem">
        <BarChart width={600} height={400} data={data} margin={{ top: 30, right: 30, left: 50, bottom: 30 }} layout="vertical">
          <XAxis type="number" domain={[0, 338000]}>
            <Label name="Distance" offset={-15} position="insideBottom" ticks={[85000, 169000, 254000, 338000]}/>
          </XAxis>
          <YAxis type="category" dataKey="musher_id">
            <Label name="Mushers" angle={-90} offset={-35} position="insideLeft" />
          </YAxis>
          <Tooltip cursor={{ fill: "#eee" }} />
          <Legend layout="vertical" verticalAlign="middle" align="right" content={renderLegend} />
          <Bar dataKey="run_dist" maxBarSize={15}>
            {data.map((entry, index) => {
              return <Cell fill={data[index].experience === "veteran" ? "#3d5941" : "#b5b991"} />;
            })}
          </Bar>
          <ReferenceLine x={80400} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em',  fill: "#FA5252", scaleToFit: true }} />
          <ReferenceLine x={159870} stroke="#FA5252" label={{ position: "top", value: "Eagle", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
          <ReferenceLine x={240270} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
          <ReferenceLine x={338000} stroke="#FA5252" label={{ position: "top", value: "Finish Dawson", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )}
}        
