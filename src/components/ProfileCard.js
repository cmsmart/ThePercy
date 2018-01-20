import React from 'react'
import { Avatar } from './Avatar'

export const ProfileCard = (props) => {
    return (
        <div className="card">
            <a href={`mushers/${props.musher_id}`}>
                <Avatar src={props.src} />
                <h4>{props.name}</h4>
            </a>
        </div>
    )
}