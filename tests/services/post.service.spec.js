const { postService } = require('../../src/services')

describe('Services: Post', () => {
  describe('get', () => {
    it('should return a list of posts', async () => {
      const posts = [
        {
          id: 1,
          title: 'Post title',
          body: 'Post body'
        }
      ]
      const axios = {
        get: jest.fn().mockResolvedValue({ data: posts })
      }
      const postsData = await postService.getPosts({ axios })

      expect(postsData).toEqual(posts)
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('/posts')
    })
  })

  describe('get by id', () => {
    it('should return a post', async () => {
      const post = {
        id: 1,
        title: 'Post title',
        body: 'Post body'
      }
      const axios = {
        get: jest.fn().mockResolvedValue({ data: post })
      }
      const postId = 1
      const postData = await postService.getPostById({ axios }, postId)

      expect(postData).toEqual(post)
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith(`/posts/${postId}`)
    })
  })

  describe('create', () => {
    it('should create a post', async () => {
      const post = {
        id: 3,
        title: 'Post title',
        body: 'Post body'
      }
      const axios = {
        post: jest.fn().mockResolvedValue({ data: post })
      }
      const postData = await postService.createPost({ axios }, post)

      expect(postData).toEqual(post)
      expect(axios.post).toHaveBeenCalledTimes(1)
      expect(axios.post).toHaveBeenCalledWith('/posts', post)
    })
  })

  describe('update', () => {
    it('should update a post', async () => {
      const post = {
        id: 3,
        title: 'Post title',
        body: 'Post body'
      }
      const axios = {
        put: jest.fn().mockResolvedValue({ data: post })
      }
      const postId = 3
      const postData = await postService.updatePost({ axios }, postId, post)

      expect(postData).toEqual(post)
      expect(axios.put).toHaveBeenCalledTimes(1)
      expect(axios.put).toHaveBeenCalledWith(`/posts/${postId}`, post)
    })
  })

  describe('delete', () => {
    it('should delete a post', async () => {
      const axios = {
        delete: jest.fn().mockResolvedValue({})
      }
      const postId = 3
      await postService.deletePost({ axios }, postId)

      expect(axios.delete).toHaveBeenCalledTimes(1)
      expect(axios.delete).toHaveBeenCalledWith(`/posts/${postId}`)
    })
  })
})
