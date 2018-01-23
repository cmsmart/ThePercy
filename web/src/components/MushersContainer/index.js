import React from "react"

import { Field } from "./Field"

import { compareObjectValues } from '../../utils/compareObjectValues'
import { filterData } from '../../utils/filterData'

export const MushersContainer = (props) => {
    return (
        <div className="outer-wrapper">
            <h2>{props.children}</h2>
            <Field data={filterData(props.mushers, props.year, props.race, props.searchQuery).slice().sort(compareObjectValues('musher'))} />
        </div>
    )
}
