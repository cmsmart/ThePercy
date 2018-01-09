import axios from 'axios'

const api = axios.create({
  baseURL: 'percy.cholenasmart.com/percy'
})

export default api