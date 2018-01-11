import React from 'react'

function ProfileCard(props) {
  return (
    <div className="card">
    <div className="avatar">
      <img src={props.src} alt="Avatar" style={{ width: "200" }} />
      </div>
      <div className="container">
        <h4>
          <b><a href="#">{props.name}</a></b>
        </h4>
      </div>
    </div>
  )
}

export default ProfileCard