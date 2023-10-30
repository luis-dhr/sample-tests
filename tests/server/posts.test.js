const app = require('../../src/server')
const request = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server-global')
const { connectDB, disconnectDB, getDB } = require('../../src/libraries/mongodb')

let server
let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  const mockUri = mongoServer.getUri()

  await connectDB(mockUri)

  const db = getDB()
  const collection = db.collection('posts')
  await collection.insertMany([{
    postID: 6,
    title: 'Test post',
    body: 'Test post body',
    userId: 1
  }])

  server = app.listen(4000)
})

afterAll(async () => {
  await server.close()

  const db = getDB()
  const collections = await db.listCollections().toArray()

  await Promise.all(
    collections.map(async ({ name }) => {
      await db.collection(name).deleteMany()
    })
  )

  await disconnectDB()
  await mongoServer.stop()
})

describe('API', () => {
  describe('Posts', () => {
    it('should get a post by id', async () => {
      const res = await request(server).get('/posts/6')

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('post')
    }, 30000)
  })
})
