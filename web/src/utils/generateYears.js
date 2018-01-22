export const generateYears = (initialYear) => {
    let years = []
    for (let i = initialYear; i < (new Date()).getFullYear(); i++) {
        years = [ i, ...years ]
    }
    return years
}

export const generateYearsObject = (initialYear) => {
    let years = []
    for (let i = initialYear; i < (new Date()).getFullYear(); i++) {
      years = [ ...years, { year: `${i}` } ]
    }
    return years
}