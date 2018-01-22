import React, { Component } from 'react'
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Label, ResponsiveContainer } from 'recharts'

import { getPastMushers } from '../../api/pastmushers'

const generateYearsObjectArray = () => {
    let years = []
    for (let i = 1981; i < (new Date()).getFullYear(); i++) {
      years = [ ...years, { year: `${i}` } ]
    }
    return years
}
  
const generateWinningTimesData = (data) => {
    let filteredArray = data.filter((datum) => datum.standing === '1' && datum.race === 'Percy')
    let years = generateYearsObjectArray()
    
    filteredArray.map((musher) => {
        return years = years.map((year) => {
            if (year.year === musher.year) {
                year = Object.assign({}, year, 
                    { race: parseFloat((musher.run_time).replace(/:/gi, '.')), name: musher.musher }
                )
            }
            return year
        })
    })   
    return years
}

export class CustomTooltip extends Component {
    render() {
        const { active } = this.props;
        const { payload, label } = this.props;

        if (active && (payload[0] != undefined)) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label}`}</p>
                    <p className="label">{`Run time : ${payload[0].payload.race}`}</p>
                    <p className="label">{`Winner : ${payload[0].payload.name}`}</p>
                </div>
        );
      }
    return null;
    }
}

export default class WinningTimesChart extends Component {

    state = {
        mushers: null,
        data: null
      }

      componentDidMount() {    
        getPastMushers().then((res) => {
          this.setState({ mushers: res })
        }).then(() => {
          this.setState({ data: generateWinningTimesData(this.state.mushers) })
        })
      }

      render () {
          console.log(this.state.data)
          return (
              <div className="outer-wrapper">
                <h2>Winning Times - The Percy</h2>
                    <div className="Composed-chart-wrapper rechart" style={{ height: '500px'}}>
                        <ResponsiveContainer padding="1rem">
                            <ComposedChart height={500} data={this.state.data}
                            margin={{top: 5, right: 30, left: 20, bottom: 30}}>
                                <XAxis dataKey="year">
                                    <Label value="Year" offset={-15} position="insideBottom" />
                                </XAxis>
                                <YAxis >
                                    <Label value="Time (hours)" angle={-90} position="insideLeft"/> 
                                </YAxis>
                                <Tooltip content={<CustomTooltip />} cursor={{fill: "eee"}} />
                                <Bar dataKey="race" name="Win time" fill="#008080" className="percy_bar" barSize={15}/>
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                );
            }
}
