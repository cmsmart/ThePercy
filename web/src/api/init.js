import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://thepercy.com/percy'
  // baseURL: 'http://percy.cholenasmart.com/percy'
})

export const johnapi = axios.create({
  baseURL: "http://api.mammothgeo.com/api"
});

