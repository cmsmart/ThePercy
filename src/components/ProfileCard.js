import React from 'react'

function ProfileCard(props) {
  return (
    <div className="card">
            <a href={`mushers/${props.musher_id}`}>
    <div className="avatar">
      <img src={`http://percy.cholenasmart.com/sites/default/files/${props.src}`} alt="Avatar" aria-label="Musher avatar" style={{ "width": "200" }} />
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

export default ProfileCard;