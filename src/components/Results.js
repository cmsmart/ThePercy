import React from "react";
import ProfileCard from "./ProfileCard";

export const Results = props => {
  return (
    <div className="field">
      <h2>Results</h2>
      <div className="myCards">
      {props.filterResults(props.mushers).map((musher, index) => {
        const imageAddress = musher.profile_image.uri.split("//");
        const image = imageAddress[1];
        return (
          <ProfileCard
            key={index}
            src={image}
            musher_id={musher.musher_id}
            name={musher.musher}
          />
        );
      })}
      </div>
    </div>
  );
};
