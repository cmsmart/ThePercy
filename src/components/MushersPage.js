import React from 'react'

import MusherHistoryChart from '../components/MusherRaceHistory'

export const MushersPage = (props) => {
  return (
    <div className='mushers-page'>
      <h1>Mushers Name</h1>

      <MusherHistoryChart />
    </div>
  )
}