import React from 'react';
import Avatar from './Avatar';

function InfoContainer(props) {
  console.log("props.src", props.src)
  return (
  <div className="info-card">
        <Avatar {...props} />
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
