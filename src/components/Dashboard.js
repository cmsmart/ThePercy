import React from 'react'
import ProgressBarChart from '../components/ProgressBarChart'
import Timer from '../containers/Timer'
import DummyChart from '../components/DummyChart'


import { Table } from './Table'

const headings = ['ID', 'Name', 'Num1', 'Num2', 'Num3']

export const Dashboard = (props) => {

  return (
    <div className='dashboard'>
      <p>Dashboard</p>
        <Timer />

        <ProgressBarChart
          title='Progress Bar Chart'
        />

      <p>Fake Table</p>
      <Table data={props.updates} classname={'live-data'} headings={headings} />

      <p>Playing wth chart formatting</p>
      <DummyChart />
    </div>
  )
}


