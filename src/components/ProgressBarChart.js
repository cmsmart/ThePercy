import React, { Component } from 'react'

import { BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ReferenceLine, Label } from 'recharts'
import { ResponsiveContainer } from 'recharts';

const MyLabel = (props) => {
  return <div>{props.value}</div>
}

const renderLegend = () => {
  return <div style={{ 
    color: "#191919", 
    display: "inline-block", 
    padding: "0.3rem 1.2rem",
  }}
  >
  <p style={{ 
    padding: "0.3rem 1.2rem", 
    textAnchor: 'middle', 
    margin: 0,
    fontSize: '0.8em',
    textAlign: 'center',
    fontWeight: 'bold',
    }}>Legend</p>
  <p style={{
      backgroundColor: "#b5b991",
      padding: "0.5rem 1.2rem",
      margin: "0.1rem",
      textAnchor: 'middle',
      fontSize: '0.8em',
      textAlign: 'center',
    }}
    > Rookie </p>
  <p style={{ 
    textAlign: 'center', 
    color: '#fff', 
    backgroundColor: "#3d5941", 
    fontSize: '0.8em', 
    padding: "0.5rem 1.2rem", 
    textAnchor: 'middle', 
    margin: "0.1rem" 
    }
    }> Veteran</p>
    </div>;
}

class DataWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      data: [
          {
          "event_id": 115,
          "musher_id": 238,
          "msg_id": 376719583,
          "longitude": "-140.704502",
          "latitude": "64.607365",
          "msg_time": 1427432947,
          "msg_age": 88545114,
          "utc_dc_out": "2015-03-26T17:21:40.000Z",
          "checkpoint_time": 1427445537,
          "run_dist": 120710,
          "run_time": {
          "hours": 11,
          "minutes": 47,
          "seconds": 27
          }
          },
          {
          "event_id": 115,
          "musher_id": 238,
          "msg_id": 376727951,
          "longitude": "-140.917743",
          "latitude": "64.676909",
          "msg_time": 1427437854,
          "msg_age": 88540207,
          "utc_dc_out": "2015-03-26T17:21:40.000Z",
          "checkpoint_time": 1427445537,
          "run_dist": 136938,
          "run_time": {
          "hours": 13,
          "minutes": 9,
          "seconds": 14
          }
          },
          {
          "event_id": 115,
          "musher_id": 238,
          "msg_id": 376719563,
          "longitude": "-140.781531",
          "latitude": "64.614235",
          "msg_time": 1427434147,
          "msg_age": 88543914,
          "utc_dc_out": "2015-03-26T17:21:40.000Z",
          "checkpoint_time": 1427445537,
          "run_dist": 125106,
          "run_time": {
          "hours": 12,
          "minutes": 7,
          "seconds": 27
          }
          },
          {
          "event_id": 115,
          "musher_id": 238,
          "msg_id": 376753076,
          "longitude": "-141.207870",
          "latitude": "64.785880",
          "msg_time": 1427449736,
          "msg_age": 88528325,
          "utc_dc_out": "2015-03-26T17:21:40.000Z",
          "checkpoint_time": 1427445537,
          "run_dist": 160368,
          "run_time": {
          "hours": 16,
          "minutes": 27,
          "seconds": 16
          }
          },
          {
          "event_id": 115,
          "musher_id": 238,
          "msg_id": 376719582,
          "longitude": "-140.736435",
          "latitude": "64.619207",
          "msg_time": 1427433547,
          "msg_age": 88544514,
          "utc_dc_out": "2015-03-26T17:21:40.000Z",
          "checkpoint_time": 1427445537,
          "run_dist": 122781,
          "run_time": {
          "hours": 11,
          "minutes": 57,
          "seconds": 27
          }
          },
          {
            "event_id": 115,
            "musher_id": 96,
            "msg_id": 377133176,
            "longitude": "-140.175543",
            "latitude": "64.333581",
            "msg_time": 1427509943,
            "msg_age": 88468118,
            "utc_dc_out": "2015-03-26T17:09:40.000Z",
            "checkpoint_time": 1427442169,
            "run_dist": 262331,
            "run_time": {
            "days": 1,
            "hours": 9,
            "minutes": 22,
            "seconds": 43
            }
            },
            {
            "event_id": 115,
            "musher_id": 96,
            "msg_id": 376546137,
            "longitude": "-139.594467",
            "latitude": "64.225543",
            "msg_time": 1427394269,
            "msg_age": 88583792,
            "utc_dc_out": "2015-03-26T17:09:40.000Z",
            "checkpoint_time": 1427442169,
            "run_dist": 21065,
            "run_time": {
            "hours": 1,
            "minutes": 14,
            "seconds": 49
            }
            },
            {
            "event_id": 115,
            "musher_id": 96,
            "msg_id": 377070216,
            "longitude": "-140.532427",
            "latitude": "64.422689",
            "msg_time": 1427496743,
            "msg_age": 88481318,
            "utc_dc_out": "2015-03-26T17:09:40.000Z",
            "checkpoint_time": 1427442169,
            "run_dist": 239793,
            "run_time": {
            "days": 1,
            "hours": 5,
            "minutes": 42,
            "seconds": 43
            }
            },
            {
            "event_id": 115,
            "musher_id": 96,
            "msg_id": 376526978,
            "longitude": "-139.455807",
            "latitude": "64.097583",
            "msg_time": 1427390610,
            "msg_age": 88587451,
            "utc_dc_out": "2015-03-26T17:09:40.000Z",
            "checkpoint_time": 1427442169,
            "run_dist": 4182,
            "run_time": {
            "minutes": 13,
            "seconds": 50
            }
            },
            {
            "event_id": 115,
            "musher_id": 96,
            "msg_id": 377067437,
            "longitude": "-140.532423",
            "latitude": "64.422671",
            "msg_time": 1427495544,
            "msg_age": 88482517,
            "utc_dc_out": "2015-03-26T17:09:40.000Z",
            "checkpoint_time": 1427442169,
            "run_dist": 239795,
            "run_time": {
            "days": 1,
            "hours": 5,
            "minutes": 22,
            "seconds": 44
            }
            }
        ]
      }
    }
   
    render(){
      return (
        <ProgressBarChart data={this.state.data}/>
      )
    }
  }


class ProgressBarChart extends Component {
	render () {
  	return (
      <div className="bar-chart-wrapper" style={{ width: '95%', height: "400px", backgroundColor: "#f8f8f8", border: "1px solid black", margin: "10px" }}>
      <ResponsiveContainer padding="1rem">
      <BarChart data={this.props.data}  syncId="anyId" width={600} height={400} margin={{ top: 30, right: 30, left: 50, bottom: 30 }} layout="vertical">
        <XAxis type="number" domain={[0, 338000]}>
          <Label value="Distance (m)" offset={-15} position="insideBottom" ticks={[0, 85000, 169000, 254000, 338000]}/>
        </XAxis>
        <YAxis type="category" dataKey="musher_id">
          <Label value="Mushers" angle={-90} offset={-35} position="insideLeft" />
        </YAxis>
        <Tooltip cursor={{ fill: "#eee" }} />
        <Legend layout="vertical" verticalAlign="middle" align="right" content={renderLegend} />

        <Bar dataKey="run_dist" maxBarSize={15} data={this.props.data}>
        {/*data.map((entry, index) => {
        return <Cell fill={data.event_id === 115 ? "#b5b991" : "#3d5941"} />;})
        */}
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

  export default ProgressBarChart