export const filterResults = (data, year, race, searchQuery = null) => {
  let filteredResults = data;
  if (year !== "Year") {
    filteredResults = filteredResults.filter(result => result.year === year);
  }
  if (race !== "Race") {
    filteredResults = filteredResults.filter(result => result.race === race);
  }
  if (!!searchQuery) {
    filteredResults = filteredResults.filter(result => (new RegExp(searchQuery)).test(result.musher));
  }
  filteredResults = filteredResults.filter((result, index, self) => (
      self.map(mapObject => mapObject["musher_id"]).indexOf(result["musher_id"]) === index
  ));
  return filteredResults
};
