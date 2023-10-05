const app = require('../../src/server')
const request = require('supertest')

jest.useFakeTimers()
let server

beforeEach(() => {
  server = app.listen(3001)
})

afterEach(() => {
  server.close()
})

describe('API', () => {
  describe('Users', () => {
    it('should get all users', async () => {
      const res = await request(server).get('/users')

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('users')
    }, 20000)

    it('should get a user by id', async () => {
      const res = await request(server).get('/users/1')

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('user')
    }, 10000)

    it('should create a new user', async () => {
      const res = await request(server).post('/users').send({
        name: 'John Doe',
        username: 'john.doe',
        email: 'mail@example.com'
      })

      expect(res.statusCode).toEqual(201)
      expect(res.body).toHaveProperty('newUser')
    }, 10000)

    it('should update a user', async () => {
      const res = await request(server).put('/users/1').send({
        name: 'John Doe Jr.',
        username: 'john.doe.jr',
        email: 'john.doe@mail.com'
      })

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('userUpdated')
    }, 10000)

    it('should delete a user', async () => {
      const res = await request(server).delete('/users/5')

      expect(res.statusCode).toEqual(204)
    }, 10000)
  })
})
