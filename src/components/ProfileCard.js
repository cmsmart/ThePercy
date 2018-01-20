import React from 'react'
import { Avatar } from './Avatar'

export const ProfileCard = (props) => {
    return (
        <div className="card">
            <a href={`mushers/${props.musher_id}`}>
                <Avatar src={props.src} />
                <div className="container">
                    <h4>{props.name}</h4>
                </div>
            </a>
        </div>
    )
}