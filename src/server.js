const bodyParser = require('body-parser')
const express = require('express')
const { postRoutes, userRoutes } = require('./routes')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (_req, res) => res.sendStatus(200))
app.use('/users', userRoutes)
app.use('/posts', postRoutes)

module.exports = app
