export const filterResults = (data, year, race, searchQuery = null) => {
  console.log('data', data);
  let filteredResults = data;
  console.log("filtered results", filteredResults);
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
    return (
      self.map(mapObj => mapObj["musher_id"]).indexOf(result["musher_id"]) ===
      index
    );
  });
  console.log(filteredResults);
  return filteredResults;
};
