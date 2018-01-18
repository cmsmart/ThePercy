import React, { Component } from 'react'
import MusherLineChart from './MusherLineChart';
import {compareObjectValues} from '../utils/compareObjectValues';

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
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "19.15.12",
        "hours": 19.25
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 80860,
        "run_time_str": "06.04.23",
        "hours": 6.07
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "19.05.13",
        "hours": 19.09
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 80677,
        "run_time_str": "05.34.21",
        "hours": 5.57
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.55.19",
        "hours": 18.92
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 120582,
        "run_time_str": "10.34.13",
        "hours": 10.57
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.43.46",
        "hours": 18.73
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 80862,
        "run_time_str": "07.34.27",
        "hours": 7.57
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.45.50",
        "hours": 18.76
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 80841,
        "run_time_str": "05.54.24",
        "hours": 5.91
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.33.43",
        "hours": 18.56
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 77597,
        "run_time_str": "05.24.21",
        "hours": 5.41
        },
        {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 157683,
        "run_time_str": "18.23.44",
        "hours": 18.4
        },
    {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 197683,
        "run_time_str": "19.15.12",
        "hours": 19.25
    },
    {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 90860,
        "run_time_str": "06.04.23",
        "hours": 6.07
    },
    {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 197683,
        "run_time_str": "19.05.13",
        "hours": 19.09
    },
    {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 90677,
        "run_time_str": "05.34.21",
        "hours": 5.57
    },
    {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 187683,
        "run_time_str": "18.55.19",
        "hours": 18.92
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 130582,
        "run_time_str": "10.34.13",
        "hours": 10.57
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 147683,
        "run_time_str": "18.43.46",
        "hours": 18.73
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 90862,
        "run_time_str": "07.34.27",
        "hours": 7.57
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 147683,
        "run_time_str": "18.45.50",
        "hours": 18.76
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 90841,
        "run_time_str": "05.54.24",
        "hours": 5.91
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 187683,
        "run_time_str": "18.33.43",
        "hours": 18.56
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 87597,
        "run_time_str": "05.24.21",
        "hours": 5.41
        },
        {
        "event_id": "119",
        "musher_id": "106",
        "run_dist": 187683,
        "run_time_str": "18.23.44",
        "hours": 18.4
        }
]

const generateKeyArray = (data, filterKey) => {
    let countArray = []
    data.forEach((datum) => {
        if (countArray.every((object) => (object[filterKey] !== datum[filterKey]))) {
            countArray = [ ...countArray, { [filterKey]: datum[filterKey] } ]
        }
    })
    return countArray
}

const generateDataStructure = (data, id, key) => {
  // dataArray = [ {id : props.match.params.id, data: [ ]}]
  // map over the data array passed in, and for each object in the array
    let dataArray = []
    data.forEach((datum) => {
        if (datum[key] === id) {
            // Create a new object that adds distance and time key-value pairs to whatever already exists in the dataArray2
            return dataArray = [ ...dataArray, { distance: (datum.run_dist/1000), time: datum.hours } ];
        }
    })
    // Add what you've mapped to a new Array that also holds the ID key-value pair
    return dataArray
}

const generateData = (data, key) => {
    let filteredData = generateKeyArray(data, key)
    filteredData = filteredData.map((object) => {
        // if (object[key] === ) {
            return object = Object.assign({}, object, { data: generateDataStructure(data, object[key], key)} )
        // }
    })
    return filteredData 
}


const LineChartData = (props) => {

    // console.log(generatingData(mySeries, props.match.params.id, 'musher_id'))
    console.log("check data",generateData(mySeries, 'event_id'))

    return (
        <div>
            <MusherLineChart data={generateData(mySeries, "event_id")} />
        </div>
    )
}

export default LineChartData