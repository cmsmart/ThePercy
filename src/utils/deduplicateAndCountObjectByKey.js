export const deduplicateAndCountObjectByKey = (data, key, countName='count', id='id') => {
    let countArray = []
    data.forEach((datum) => {
        if (countArray.some((object) => (object[id] === datum[key]))) {
            countArray.forEach((object) => {
                if (object[id] === datum[key]) {
                    return object[countName]++
                }
            })
        }
        else {
            return countArray = [ ...countArray, { [id]: datum[key], [countName]: 1 } ]
        }
    })
    return countArray
}