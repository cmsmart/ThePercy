import React from 'react';
import Avatar from './Avatar';

function InfoContainer(props) {
  return (
<<<<<<< HEAD
  <div className="info-card">
        <Avatar {...props} />
=======
    <div className="card">
    <div className="avatar">
      <img src={`http://percy.cholenasmart.com/sites/default/files/styles/mushers/public/${props.src}`} alt="Avatar" aria-label="Musher avatar" style={{ "width": "200" }} />
      </div>
>>>>>>> development
      <div className="container">
        <h4>
          <b>Age: </b>
        </h4>
        <h4>
          <b>Hometown: </b>{ props.residence }
        </h4>
        <h4>
          <b>Number of times run the Percy: </b>{ props.musher }
        </h4>
        <h4>
          <b>Number of times run the Percy Junior: </b>
        </h4>
        <h4>
          <b>Best finishing time: </b>
        </h4>
        <h4>
          <b>Best placing: </b>
        </h4>
      </div>
    </div>
  )
}

export default InfoContainer;
