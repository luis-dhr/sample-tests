const assert = require('assert')
const axios = require('axios')
const { Given, When, Then } = require('cucumber')

let response

Given('the API is running', async function () {
  response = await axios.get('http://localhost:3000')
})

When('I send a GET request to {string}', async function (string) {
  response = await axios.get(`http://localhost:3000${string}`)
})

Then('the response code should be {int}', function (int) {
  assert(response.status === int)
})
