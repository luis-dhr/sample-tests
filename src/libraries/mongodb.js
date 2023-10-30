const MongoClient = require('mongodb').MongoClient

let client
let _db

const connectDB = async (dbURL) => {
  client = await createConnection(dbURL)
  _db = client.db('APP')
}

const createConnection = async (uri) => MongoClient.connect(uri)
  .then(conn => {
    console.log(`Connected to ${uri.substr(uri.lastIndexOf('@') + 1, uri.lastIndexOf('/') - uri.lastIndexOf('@') - 1)}`)
    return conn
  })

const getDB = () => _db

const disconnectDB = () => client.close()

module.exports = { connectDB, getDB, disconnectDB }
