import axios from 'axios'

const api = axios.create({
  baseURL: 'http://percy.cholenasmart.com/percy'
})

export default api