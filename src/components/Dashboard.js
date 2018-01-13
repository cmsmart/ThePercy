import React from 'react'
import ProgressBarChart from '../components/ProgressBarChart'
import DummyChart from '../components/DummyChart'
import Timer from '../containers/Timer'

import { Table } from './Table'

const headings = ['ID', 'Name', 'Num1', 'Num2', 'Num3']

export const Dashboard = (props) => {

  return (
    <main className='dashboard'>
        <Timer />

        <ProgressBarChart
          title='Progress Bar Chart'
        />

      <p>Fake Table</p>
      <Table data={props.updates} classname={'live-data'} headings={headings} />

    </main>
  )
}


