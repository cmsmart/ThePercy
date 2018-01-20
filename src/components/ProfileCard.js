import React from 'react';
import Avatar from './Avatar';

function ProfileCard(props) {
  return <div className="card">
      <a href={`mushers/${props.musher_id}`}>
        <Avatar {...props} />
        <div className="container">
          <h4>
            <b>{props.name}</b>
          </h4>
        </div>
      </a>
    </div>
}

export default ProfileCard;