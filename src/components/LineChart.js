import React, { Component } from 'react'
import MusherLineChart from './MusherLineChart';

// Format we want 
//const series = [

  // {race_id OR musher_id: 'XXXX', data: [
  //   {time: '0', dist: 0 },
  //   {time: '30', dist: 152.7},
  //   {time: '50', dist: 338}
  // ]},
  // {year: '2013', data: [
  //   {time: '0', dist: 0 },
  //   {time: '30', dist: 152.7},
  //   {time: '45', dist: 338}
  // ]},

  // Format of data we're getting
const mySeries = [
    {
        "event_id": 117,
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "19.15.12",
        "hours": 19.25
    },
    {
        "event_id": 117,
        "musher_id": "106",
        "run_dist": 80860,
        "run_time_str": "06.04.23",
        "hours": 6.07
    },
    {
        "event_id": 117,
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "19.05.13",
        "hours": 19.09
    },
    {
        "event_id": 117,
        "musher_id": "106",
        "run_dist": 80677,
        "run_time_str": "05.34.21",
        "hours": 5.57
    },
    {
        "event_id": 117,
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.55.19",
        "hours": 18.92
        },
        {
        "event_id": 117,
        "musher_id": "106",
        "run_dist": 120582,
        "run_time_str": "10.34.13",
        "hours": 10.57
        },
        {
        "event_id": 117,
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.43.46",
        "hours": 18.73
        },
        {
        "event_id": 117,
        "musher_id": "106",
        "run_dist": 80862,
        "run_time_str": "07.34.27",
        "hours": 7.57
        },
        {
        "event_id": 117,
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.45.50",
        "hours": 18.76
        },
        {
        "event_id": 117,
        "musher_id": "106",
        "run_dist": 80841,
        "run_time_str": "05.54.24",
        "hours": 5.91
        },
        {
        "event_id": 117,
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.33.43",
        "hours": 18.56
        },
        {
        "event_id": 117,
        "musher_id": "106",
        "run_dist": 77597,
        "run_time_str": "05.24.21",
        "hours": 5.41
        },
        {
        "event_id": 117,
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.23.44",
        "hours": 18.4
        }
]

const filterDataStructure = (data) => {
  let dataArray = []
  data.forEach(datum => {
    if (Object.keys(dataArray)[datum.event_id] !== datum.event_id) {
      return dataArray = [ ...dataArray, generatingDataStructure(data, datum.musher_id, "musher_id")]
    }

  })

  return dataArray
}

const generatingDataStructure = (data, id, key) => {
  let filteredArray = data.filter(datum => {
    datum.event_id
  })
  console.log('filtered array', filteredArray)
  // dataArray = [ {id : props.match.params.id, data: [ ]}]
  // map over the data array passed in, and for each object in the array
  let dataArray = data.map(datum => {
      if (datum[key] === id) {
          // Create a new object that adds distance and time key-value pairs to whatever already exists in the dataArray2
          let item = { ...dataArray, event_id: datum.event_id, distance: datum.run_dist, time: datum.run_time_str };
          return item;
      }
    });
    let dataObject = { data: dataArray };
  // Add what you've mapped to a new Array that also holds the ID key-value pair
  return dataObject
};

const LineChart = (props) => {

    // console.log(generatingDataStructure(mySeries, props.match.params.id, 'musher_id'))
    // console.log(filterDataStructure(mySeries))
    return (
        <div>
            {/* <MusherLineChart props={generatingData(mySeries, props.match.musher_id)} /> */}
        </div>
    )
}

export default LineChart