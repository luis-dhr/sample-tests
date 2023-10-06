const { sharedService } = require('../../src/services')

describe('Services: Shared', () => {
  describe('Create user post', () => {
    it('should create a post if user exists', async () => {
      const axios = {
        get: jest.fn().mockResolvedValue({ data: { id: 5 } }),
        post: jest.fn().mockResolvedValue({ data: { id: 1 } })
      }
      const postData = {
        userId: 5,
        title: 'Post title',
        body: 'Post body'
      }
      const newPost = await sharedService.createUserPost({ axios }, postData)

      expect(newPost).toEqual({ id: 1 })
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('/users/5')
      expect(axios.post).toHaveBeenCalledTimes(1)
      expect(axios.post).toHaveBeenCalledWith('/posts', postData)
    }, 35000)

    it('should throw an error if user does not exist', async () => {
      const axios = {
        get: jest.fn().mockResolvedValue({ data: null }),
        post: jest.fn().mockResolvedValue({ data: { id: 1 } })
      }
      const body = {
        userId: 5,
        title: 'Post title',
        body: 'Post body'
      }

      await expect(sharedService.createUserPost({ axios }, body)).rejects.toThrow(
        'User not found'
      )
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('/users/5')
      expect(axios.post).toHaveBeenCalledTimes(0)
    })
  }, 35000)
})
