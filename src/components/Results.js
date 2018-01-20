import React from "react"

import { Field } from "./Field"

import { filterResults } from '../utils/filterResults'
import { compareObjectValues } from '../utils/compareObjectValues'

export const Results = (props) => {
    return (
        <Field data={filterResults(props.data, props.year, props.race, props.searchQuery).slice().sort(compareObjectValues('musher'))} />
    )
}
