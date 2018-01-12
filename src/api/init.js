import axios from 'axios'

const api = axios.create({
  baseURL: 'https://percy.cholenasmart.com/percy'
})

export default api