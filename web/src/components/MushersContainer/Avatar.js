import React from "react"

export const Avatar = (props) => {
    return (
        <div className="avatar">
            <img src={`https://thepercy.com/sites/default/files/styles/mushers/public/${props.src.uri.replace('public://', '')}`} alt="Avatar" aria-label="Musher avatar" style={{ width: "200" }} />
        </div>
    )
}


