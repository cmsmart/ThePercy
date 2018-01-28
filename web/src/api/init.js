import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://thepercy.com/percy'
  // baseURL: 'http://percy.cholenasmart.com/percy'
})

export const johnapi = axios.create({
  baseURL: "https://mammothgeo.com/api"
});

