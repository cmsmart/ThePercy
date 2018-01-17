import React from 'react'

function InfoContainer(props) {
  return (
    <div className="card">
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
    </div>
  )
}

export default InfoContainer;