import api from './init'

export function getUpdates() {
  return api.get('./updates').then((res) => {
    return res.data
  })
}

export function getFilteredUpdates(year, id) {
  return api.get(`./updates?year[value][year]=${year}&rid=${id}`).then((res) => {
    return res.data
  })
}

export function getFilteredUpdatesByYear(year) {

  return api.get(`./updates?year[value][year]=${year}`).then((res) => {
    return res.data
  })
}
export function getFilteredUpdatesByRace(id) {
  return api.get(`./updates?rid=${id}`).then((res) => {
    return res.data
  })
}

