const app = require('./src/server')
const { connectDB } = require('./src/libraries/mongodb')

const url = 'mongodb://127.0.0.1:27017/'

connectDB(url).then(() => {
  app.listen(3000, () => {
    console.log('app listening on http://localhost:3000')
  })
}).catch((err) => {
  console.log(err)
  process.exit(1)
})
