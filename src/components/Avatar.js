import React from "react"

const getImageAddress = musher => {
    let imageAddress = musher.uri.replace('public://', '')
    return imageAddress
}

export const Avatar = (props) => {
    return (
        <div className="avatar">
            <img src={`http://percy.cholenasmart.com/sites/default/files/styles/mushers/public/${getImageAddress(props.src)}`} alt="Avatar" aria-label="Musher avatar" style={{ width: "200" }} />
        </div>
    )
}


