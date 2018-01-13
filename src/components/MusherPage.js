import React from 'react'

import MusherHistoryChart from '../components/MusherRaceHistory'
import MusherLineChart from './MusherLineChart'

export const MusherPage = (props) => {
  return (
    <div className='musher-page'>
      <h1>Mushers Name</h1>

      <MusherHistoryChart />
      <MusherLineChart />

    </div>
  )
}

export default MusherPage