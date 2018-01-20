import React from "react"

import { ProfileCard } from "./ProfileCard"

const mapDataToProfileCard = (data) => {
    let profileCards = data.map((datum, index) => (
            <ProfileCard key={index} src={datum.profile_image} musher_id={datum.musher_id} name={datum.musher} />
        )
    )
    return profileCards
}

export const Field = (props) => {
    return (
        <div className="field">
            <h2>The Field</h2>
            <div className="myCards">
                {mapDataToProfileCard(props.data)}
            </div>
        </div>
    )
}
