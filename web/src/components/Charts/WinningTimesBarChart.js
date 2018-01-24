import React, { Component } from 'react'
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Label, ResponsiveContainer } from 'recharts'

import { generateYearsObject } from '../../utils/generateYears'
  
const generateWinningTimesData = (data, initialYear) => {   
    let barData = generateYearsObject(initialYear)
    data.forEach((datum) => {
        return barData = barData.map((object) => {
            if (object.year === datum.year) {
                object = Object.assign({}, object, { run_time: parseFloat((datum.run_time).replace(/:/gi, '.')), name: datum.musher })
            }
            return object
        })
    })   
    return barData
}

export class CustomTooltip extends Component {
    render() {
        const { active } = this.props;
        const { payload, label } = this.props;

        if (active && (payload[0] !== undefined)) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label}`}</p>
                    <p className="label">{`Run time: ${(payload[0].payload.run_time).toFixed(2)}`}</p>
                    <p className="label">{`Winner: ${payload[0].payload.name}`}</p>
                </div>
        );
      }
    return null;
    }
}

export const WinningTimesBarChart = (props) => {
    return (
        <div className="outer-wrapper">
            <h2>{props.children}</h2>
            <p className="explanatory">Actual runtime (excludes layovers)</p>
            <div className="Composed-chart-wrapper rechart" style={{ height: '500px'}}>
                <ResponsiveContainer padding="1rem">
                    <ComposedChart height={500} data={generateWinningTimesData(props.data, props.year)}
                    margin={{top: 5, right: 30, left: 20, bottom: 30}}>
                        <XAxis dataKey="year">
                            <Label value="Year" offset={-15} position="insideBottom" />
                        </XAxis>
                        <YAxis >
                            <Label value="Time (hours)" angle={-90} position="insideLeft"/> 
                        </YAxis>
                        <Tooltip cursor={{fill: "eee"}} content={<CustomTooltip />} />
                        <Bar dataKey="run_time" name="Win time" fill={props.colour} className="percy_bar" barSize={15}/>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
