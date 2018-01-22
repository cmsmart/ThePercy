import axios from 'axios'

const api = axios.create({
  baseURL: 'https://thepercy.com/percy'
})

export default api