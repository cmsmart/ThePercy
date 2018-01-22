import axios from 'axios'

const api = axios.create({
  baseURL: 'https://thepercy.com/percy'
})
const johnapi = axios.create({
  baseURL: "https://159.89.148.36:3000/api/"
});

export default api