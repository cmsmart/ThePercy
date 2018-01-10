import React from 'react'
import ProgressBarChart from '../components/ProgressBarChart'


export const Dashboard = (props) => {

  return (
    <div className='dashboard'>
      <p>Dashboard</p>
        <ProgressBarChart
          title='Progress Bar Chart'
        />
    </div>
  )
}


