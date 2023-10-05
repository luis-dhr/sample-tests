const request = require('supertest')
const app = require('../../src/server')

jest.useFakeTimers()
let server

beforeEach(() => {
  server = app.listen(4000)
})

afterEach(() => {
  server.close()
})

describe('API', () => {
  describe('Posts', () => {
    it('should get all posts', async () => {
      const res = await request(server).get('/posts')

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('posts')
    }, 20000)

    it('should get a post by id', async () => {
      const res = await request(server).get('/posts/1')

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('post')
    }, 20000)

    it('should create a new post', async () => {
      const res = await request(server).post('/posts').send({
        userId: 5,
        title: 'New Post',
        body: 'A new post created by the API'
      })

      expect(res.statusCode).toEqual(201)
      expect(res.body).toHaveProperty('newPost')
    }, 20000)

    it('should update a post', async () => {
      const res = await request(server).put('/posts/6').send({
        title: 'Updated Post',
        body: 'A post updated by the API'
      })

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('postUpdated')
    }, 20000)

    it('should delete a post', async () => {
      const res = await request(server).delete('/posts/9')

      expect(res.statusCode).toEqual(204)
    }, 20000)
  })
})
