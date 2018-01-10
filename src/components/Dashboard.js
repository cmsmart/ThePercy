import React from 'react'
import ProgressBarChart from '../components/ProgressBarChart'


import { Table } from './Table'

const headings = ['ID', 'Name', 'Num1', 'Num2', 'Num3']

export const Dashboard = (props) => {

  return (
    <div className='dashboard'>
      <p>Dashboard</p>

        <ProgressBarChart
          title='Progress Bar Chart'
        />

      <p>Fake Table</p>
      <Table data={props.updates} classname={'live-data'} headings={headings} />

    </div>
  )
}


