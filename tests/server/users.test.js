const app = require('../../src/server')
const request = require('supertest')

jest.useRealTimers()
let server

beforeAll(() => {
  server = app.listen(4001)
})

afterAll(() => {
  server.close()
})

describe('API', () => {
  describe('Users', () => {
    it('should get a user by id', async () => {
      const res = await request(server).get('/users/1')

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('user')
    }, 30000)
  })
})
