import api from './init'

export function getPastRaces() {
  return api.get('./past').then((res) => {
    return res.data
  })
}