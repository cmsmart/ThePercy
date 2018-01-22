export const filterData = (data, year, race, searchQuery = null) => {
    let filteredData = data;
    if (year !== "Year") {
        filteredData = filteredData.filter(result => result.year === year);
    }
    if (race !== "Race") {
        filteredData = filteredData.filter(result => result.race === race);
    }
    if (!!searchQuery) {
        filteredData = filteredData.filter(result => (new RegExp(searchQuery.toLowerCase())).test(result.musher.toLowerCase()));
    }
    filteredData = filteredData.filter((result, index, self) => (
        self.map(mapObject => mapObject["musher_id"]).indexOf(result["musher_id"]) === index
    ))
    return filteredData
}