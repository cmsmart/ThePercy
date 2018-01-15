import React, { Component } from 'react'

import { getMushers } from '../api/mushers';

import { compareObjectValues } from '../utils/compareObjectValues'

function tallyDataCount(mushers) {
  let sortedArray = mushers.slice().sort(compareObjectValues('musher'))
  let countArray = []
  sortedArray.map((musher) => {
    if (countArray.some((object) => (object.name === musher.musher))) {
      countArray.forEach((object) => {
        if (object.name === musher.musher) {
          return object.races++
        }
      })
    }
    else {
      countArray = [ ...countArray, {name: musher.musher, races: 1} ]
    }
  })
  return countArray
}

export default class StatisticsPage extends Component {

  state = {
    mushers: null
  }

  componentDidMount() {
    getMushers().then((res) => {
      this.setState({ mushers: res })
    }).then(() => (
      console.log(tallyDataCount(this.state.mushers))
    ))
  }
  
  render() {
    return (
    <div className='statistics-page'>
      <p>Statistics Page</p>
    </div>
    )
  }
}