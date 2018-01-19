import api from './init'

export function getMushers() {
  return api.get('./mushers').then((res) => {
    return res.data
  })
}

export function getFilteredMushersByYear(year) {
  return api.get(`./mushers?year[value][year]=${year}`).then(res => {
      return res.data;
    });
}

export function getFilteredMushersByRace(rid) {
  return api.get(`./mushers?rid=${rid}`).then((res) => {
    return res.data
  })
}

export function getFilteredMushers(year, rid) {
  return api.get(`./mushers?year[value][year]=${year}&rid=${rid}`).then(res => {
      return res.data;
    });
}

export function getMusherByID(id) {
  return api.get(`./mushers?id=${id}`).then((res) => {
    return res.data
  })
}