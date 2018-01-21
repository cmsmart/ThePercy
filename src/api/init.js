import axios from 'axios'

const api = axios.create({
  baseURL: 'http://thepercy.com/percy'
})

export default api