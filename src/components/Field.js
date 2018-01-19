import React from "react";
import ProfileCard from "./ProfileCard";

export const Field = props => {

  return (
    <div className="field">
    <h2>The Field</h2>
    <div className="myCards">
    {console.log('field', props.data)}
    {props.data.filter(datum => {
      
    })}
  {props.data.map((datum, index) => {
    return (
          <ProfileCard
            key={index}
            src={datum.profile_image}
            musher_id={datum.musher_id}
            name={datum.musher}
            />
          );
        })}
        </div>
      </div>
  )};
