import React from 'react'
import MusherLineChart from './MusherLineChart';

const mySeries = [
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 0,
        "run_time_str": "19.15.12",
        "hours": 0.0
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 50000,
        "run_time_str": "19.15.12",
        "hours": 2.25
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 100000,
        "run_time_str": "19.15.12",
        "hours": 6.25
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 150000,
        "run_time_str": "19.15.12",
        "hours": 10.25
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 180000,
        "run_time_str": "19.15.12",
        "hours": 14.25
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 200000,
        "run_time_str": "19.15.12",
        "hours": 17.25
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 240000,
        "run_time_str": "19.15.12",
        "hours": 21.25
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 280000,
        "run_time_str": "19.15.12",
        "hours": 24.25
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 300000,
        "run_time_str": "19.15.12",
        "hours": 28.25
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 320000,
        "run_time_str": "19.15.12",
        "hours": 30.25
    },
    {
        "event_id": "117",
        "musher_id": "106",
        "run_dist": 338000,
        "run_time_str": "19.15.12",
        "hours": 32.25
    },
    {
        "event_id": "115",
        "musher_id": "106",
        "run_dist": 0,
        "run_time_str": "19.15.12",
        "hours": 0.0
    },
    {
        "event_id": "115",
        "musher_id": "106",
        "run_dist": 40000,
        "run_time_str": "19.15.12",
        "hours": 2.25
    },
    {
        "event_id": "115",
        "musher_id": "106",
        "run_dist": 90000,
        "run_time_str": "19.15.12",
        "hours": 6.25
    },
    {
        "event_id": "115",
        "musher_id": "106",
        "run_dist": 140000,
        "run_time_str": "19.15.12",
        "hours": 10.25
    },
    {
        "event_id": "115",
        "musher_id": "106",
        "run_dist": 170000,
        "run_time_str": "19.15.12",
        "hours": 14.25
    },
    {
        "event_id": "115",
        "musher_id": "106",
        "run_dist": 210000,
        "run_time_str": "19.15.12",
        "hours": 17.25
    },
    {
        "event_id": "115",
        "musher_id": "106",
        "run_dist": 235000,
        "run_time_str": "19.15.12",
        "hours": 21.25
    },
    {
        "event_id": "115",
        "musher_id": "106",
        "run_dist": 270000,
        "run_time_str": "19.15.12",
        "hours": 26.25
    },
    {
        "event_id": "115",
        "musher_id": "106",
        "run_dist": 295000,
        "run_time_str": "19.15.12",
        "hours": 29.25
    },
    {
        "event_id": "115",
        "musher_id": "106",
        "run_dist": 315000,
        "run_time_str": "19.15.12",
        "hours": 31.25
    },
    {
        "event_id": "115",
        "musher_id": "106",
        "run_dist": 338000,
        "run_time_str": "19.15.12",
        "hours": 33.25
    },
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
    let dataArray = []
    data.forEach((datum) => {
        if (datum[key] === id) {
            return dataArray = [ ...dataArray, { distance: (datum.run_dist/1000), time: datum.hours } ];
        }
    })
    return dataArray
}

const generateData = (data, key) => {
    let filteredData = generateKeyArray(data, key)
    filteredData = filteredData.map((object) => {
            return object = Object.assign({}, object, { data: generateDataStructure(data, object[key], key)} )
    })
    return filteredData 
}


const LineChartData = (props) => {
    return (
        <div>
            <MusherLineChart data={generateData(mySeries, "event_id")} />
        </div>
    )
}

export default LineChartData