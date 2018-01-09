import api from './init'

export function getMushers() {
  return api.get('./mushers').then((res) => {
    return res.data
  })
}