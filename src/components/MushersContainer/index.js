import React from "react"

import { Field } from "./Field"

import { compareObjectValues } from '../../utils/compareObjectValues'
import { filterData } from '../../utils/filterData'

export const MushersContainer = (props) => {
    return (
        <Field data={filterData(props.mushers, props.year, props.race, props.searchQuery).slice().sort(compareObjectValues('musher'))} />
    )
}
