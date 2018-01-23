import React, { Component } from 'react'
import ProgressBarChart from './ProgressBarChart';
import {compareObjectValues} from '../../utils/compareObjectValues';


const currentSeries = [
  {name: 'Percy DeWolfe', data: [
          {bib: '0', dist: 338, time: 0},
          ]},
        {name: 'Cholena', data: [
          {bib: '1', dist: 0, time: 0},
          {bib: '1', dist: 100, time: 13},
          {bib: '1', dist: 166, time: 22}
        ]},
        {name: 'Gretch', data: [
          {bib: '2', dist: 0, time: 0},
          {bib: '2', dist: 16, time: 12},
          {bib: '2', dist: 22, time: 18},
          {bib: '2', dist: 21, time: 22},
          {bib: '2', dist: 338, time: 29}
        ]},
    ];


const generateKeyArray = (data, filterKey) => {
  let countArray = []
  currentSeries.forEach((datum) => {
      if (countArray.every((object) => (object[filterKey] !== datum[filterKey]))) {
          countArray = [ ...countArray, { [filterKey]: datum[filterKey] } ]
      }
  })
  return countArray
}

const generateDataStructure = (data, id, key) => {
  let dataArray = []
  currentSeries.forEach((datum) => {
      if (datum[key] === id) {
          return dataArray = [ ...dataArray, { name: datum.name, distance: (datum.run_dist/1000),  bib: datum.bib  } ];
      }
  })
  return dataArray
}

const generateData = (series, key) => {
  let filteredData = generateKeyArray(series, key)
  filteredData = filteredData.map((object) => {
          return object = Object.assign({}, object, { series: generateDataStructure(series, object[key], key)} )
  })
  return filteredData 
}

const ProgressBarData = (props) => {

  // console.log(generatingData(mySeries, props.match.params.id, 'musher_id'))
  console.log("check data",generateData(currentSeries, 'musher_id'))

  return (
      <div>
          <ProgressBarChart data={generateData(currentSeries, "musher_id")} />
      </div>
  )
}

export default ProgressBarData