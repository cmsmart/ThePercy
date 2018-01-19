import api from './init'

export function getUpdates() {
  return api.get('./updates').then((res) => {
    return res.data
  })
}