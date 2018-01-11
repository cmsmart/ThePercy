import React from 'react'

import SimpleBarChart from '../components/MusherRaceHistory'
import MusherLineChart from './MusherLineChart'

export const MushersPage = (props) => {
  return (
    <div className='mushers-page'>
      <h1>Mushers Name</h1>

      <SimpleBarChart />

      <MusherLineChart />
    </div>
  )
}