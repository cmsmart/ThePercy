// const getMusherName = (id) => {
//     let name = ''
//     mushers.map(musher => {
//       if (musher.musher_id === id) {
//         name = musher.musher
//       }
//     })
//     return name
//   }

const generateKeyArray = (data, filterKey) => {
    let countArray = []
    data.forEach((datum) => {
        if (countArray.every((object) => (object[filterKey] !== datum[filterKey]))) {
            countArray = [ ...countArray, { [filterKey]: datum[filterKey] } ]
        }
    })
    //  console.log('generateKeyArray: ', filterKey, countArray)
    return countArray
}

const generateDataStructure = (data, id, key) => {
    let dataArray = []
    data.forEach((datum) => {
        if (datum[key] === id) {
            return dataArray = [ ...dataArray, { musher_name: datum.name, musher_id: datum.musher_id, bib: datum.bib_no, distance: (datum.run_dist/1000), time: datum.run_time } ];
        }
    })
    console.log('generateDataStructure', dataArray)
    return dataArray
}

export const generateData = (data, key) => {
    let filteredData = generateKeyArray(data, key)
    filteredData = filteredData.map((object) => {
            return object = Object.assign({}, object, { data: generateDataStructure(data, object[key], key)} )
    })
    console.log('generateData', filteredData)
    return filteredData 
}