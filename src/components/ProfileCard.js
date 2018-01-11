import React from 'react'

function ProfileCard(props) {
  return (
    <div className="card">
      <img 
        src={ props.src } 
        alt="Avatar" 
        style={{"width":"100%"}} 
      />
      <div className="container">
        <h4><b>{ props.name }</b></h4>
      </div>
    </div> 
  )
}

export default ProfileCard