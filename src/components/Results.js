import React from "react";
import ProfileCard from "./ProfileCard";

const filterResults = (data, year, race, searchQuery=null) => {
    let filteredResults = data;
    console.log('filtered results', filteredResults)
    if (year !== "Year") {
      filteredResults = filteredResults.filter(result => result.year === year);
    }
    if (race !== "Race") {
      filteredResults = filteredResults.filter(result => result.race === race);
    }
    if (searchQuery) {
      filteredResults = filteredResults.filter(result =>
        new RegExp(searchQuery).test(result.musher)
      );
    }
    filteredResults = filteredResults.filter((result, index, self) => {
      return self
          .map(mapObj => mapObj["musher_id"])
          .indexOf(result["musher_id"]) === index;
    });
    console.log(filteredResults)
    return filteredResults;
  };

export const Results = props => {
  return (
    <div className="field">
      <h2>Results</h2>
      <div className="myCards">
      {!!props.data &&
        filterResults(props.data, props.year, props.race, props.searchQuery).map((musher, index) => {
        return (
          <ProfileCard
            key={index}
            src={musher.profile_image}
            musher_id={musher.musher_id}
            name={musher.musher}
          />
        );
      })}
      </div>
    </div>
  );
};
