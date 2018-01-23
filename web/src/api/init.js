import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://thepercy.com/percy'
})

export const johnapi = axios.create({
  baseURL: "http://mammothgeo.com:3000/api/"
});

