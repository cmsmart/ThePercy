import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://www.thepercy.com/percy'
  // baseURL: 'http://percy.cholenasmart.com/percy'
})

export const johnapi = axios.create({
  baseURL: "https://api.mammothgeo.com/api"
});

