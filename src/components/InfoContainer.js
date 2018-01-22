import React from 'react'

import { Avatar } from './MushersContainer/Avatar'

export const InfoContainer = (props) => {
    return (
        <div className="info-card">
            <Avatar {...props} />
            <div className="container">
                <h4>
                    Age:
                </h4>
                <h4>
                    Hometown: { props.residence }
                </h4>
                <h4>
                    Number of times run the Percy: { props.musher }
                </h4>
                <h4>
                    Number of times run the Percy Junior: 
                </h4>
                <h4>
                    Best finishing time: 
                </h4>
                <h4>
                    Best placing: 
                </h4>
            </div>
        </div>
    )
}
