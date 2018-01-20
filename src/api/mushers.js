import api from './init'

export function getMushers() {
  return api.get('./mushers').then((res) => {
    return res.data
  })
}

export function getMusherByID(id) {
  return api.get(`./mushers?id=${id}`).then((res) => {
    return res.data
  })
}