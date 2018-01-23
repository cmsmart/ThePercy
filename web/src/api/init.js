import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://thepercy.com/percy'
})

export const johnapi = axios.create({
  baseURL: "http://159.89.148.36:3000/api/"
});

