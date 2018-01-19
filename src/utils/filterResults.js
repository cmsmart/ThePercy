export const filterResults = (data, year, race, searchQuery = null) => {
  let filteredResults = data;
  if (year !== "0") {
    filteredResults = filteredResults.filter(result => result.year === year);
  }
  if (race !== "0") {
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
  return filteredResults;
};
