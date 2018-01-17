import React, { Component } from 'react'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ReferenceLine, Label } from 'recharts'
import { ResponsiveContainer } from 'recharts';


// yarn add prop-types

const data = [
      {name: 'Cho', distance: 337, experience: 'veteran'},
      {name: 'Pat', distance: 110, experience: 'rookie'},
      {name: 'John', distance: 230, experience: 'veteran'},
      {name: 'Carl', distance: 300, experience: 'rookie'},
      {name: 'Hannah', distance: 205, experience: 'veteran'},
      {name: 'Frank', distance: 190, experience: 'veteran'},
      {name: 'Clayton', distance: 99, experience: 'rookie'},
      {name: 'Gretchen', distance: 5, experience: 'veteran'}
];

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

const generateKeyArray = (data, filterKey) => {
  let countArray = []
  data.forEach((datum) => {
    if (countArray.every((object) => (object [filterKey] != datum[filterKey] ))) {
      countArray = [...countArray, {
        [filterKey]: datum[filterKey] 
      }]
    }
  })
  return countArray
}

const generateDataStructure = (data, id, key) => {
  let dataArray = []
  data.forEach((datum) => {
    if (datum[key] == id) {
      return dataArray = [ ...dataArray, {
        distance: datum.run_dist } ];
      }
    })
  return dataArray
}

const generateData = (data, key) => {
  let filteredData = generateKeyArray(data, key)
  filteredData = filterData.map((object) => {
    return object = Object.assign({},
    object, {data: generateDataStructure (data, object[key], key )} )
  })
  return filteredData
}

class ProgressBarChart extends Component {
  constructor(props) {
    super(props);

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
  }

	render () {
  	return (
      <div className="area-chart-wrapper" style={{ width: '95%', height: "400px", backgroundColor: "#f8f8f8", border: "1px solid black", margin: "10px" }} display= "inline-block">
      <ResponsiveContainer padding="1rem">
      <BarChart width={600} height={400} data={data} margin={{ top: 30, right: 30, left: 50, bottom: 30 }} layout="vertical">
        <XAxis type="number" domain={[0, 338]}>
          <Label value="Distance" offset={-15} position="insideBottom" ticks={[85, 169, 254, 338]}/>
        </XAxis>
        <YAxis type="category" dataKey="name">
          <Label value="Mushers" angle={-90} offset={-35} position="insideLeft" />
        </YAxis>
        <Tooltip cursor={{ fill: "#eee" }} />
        <Legend layout="vertical" verticalAlign="middle" align="right" content={renderLegend} />
        <Bar dataKey="distance" maxBarSize={15}>
          {data.map((entry, index) => {
            return <Cell fill={data[index].experience === "veteran" ? "#3d5941" : "#b5b991"} />;
          })}
        </Bar>
          <ReferenceLine x={80.4} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em',  fill: "#FA5252", scaleToFit: true }} />
          <ReferenceLine x={159.87} stroke="#FA5252" label={{ position: "top", value: "Eagle", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
          <ReferenceLine x={240.27} stroke="#FA5252" label={{ position: "top", value: "Fortymile", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
          <ReferenceLine x={338} stroke="#FA5252" label={{ position: "top", value: "Finish Dawson", fontSize: '0.8em', fill: "#FA5252", scaleToFit: true }} />
      </BarChart>
      </ResponsiveContainer>
      </div>
    )}
  }

  export default ProgressBarChart