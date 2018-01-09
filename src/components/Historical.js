import React from 'react'

import { Table } from './Table'

const headings = ['Name', 'Start', 'End']

export const Historical = (props) => {
  return (
    <div className='historical'>
      <p>Past Races</p>
      <p>Fake Table 2</p>
      <Table data={props.races} classname={'past-data'} headings={headings} />
    </div>
  )
}