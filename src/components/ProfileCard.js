import React from 'react'

function ProfileCard(props) {
  return (
    <div className="card">
            <a href="#">
    <div className="avatar">
      <img src={props.src} alt="Avatar" style={{ width: "200" }} />
      </div>
      <div className="container">
        <h4>
          <b>
          {props.name}
          </b>
        </h4>
      </div>
          </a>
    </div>
  )
}

export default ProfileCard