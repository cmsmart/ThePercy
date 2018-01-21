import React from "react"

import { ProfileCard } from "./ProfileCard"

const mapDataToProfileCard = (data) => {
    return (
        data.map((datum, index) => (<ProfileCard key={index} src={datum.profile_image} musher_id={datum.musher_id} name={datum.musher} />))
    )
}

export const Field = (props) => {
    return (
        <div className="myCards">{mapDataToProfileCard(props.data)}</div>
    )
}
