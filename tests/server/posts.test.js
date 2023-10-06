const request = require('supertest')
const app = require('../../src/server')

jest.useRealTimers()
let server

beforeAll(() => {
  server = app.listen(4000)
})

afterAll(() => {
  server.close()
})

describe('API', () => {
  describe('Posts', () => {
    it('should get a post by id', async () => {
      const res = await request(server).get('/posts/1')

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('post')
    }, 30000)
  })
})
