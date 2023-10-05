const axios = require('axios')

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 20000
})

module.exports = axiosInstance
