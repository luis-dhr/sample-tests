const app = require('./src/server')

const server = app.listen(3000, () => {
  console.log(`app listening on http://localhost:${server.address().port}`)
})
