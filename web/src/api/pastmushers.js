import { api } from './init'

export function getPastMushers() {
  return api.get('./past').then((res) => {
    return res.data
  })
}