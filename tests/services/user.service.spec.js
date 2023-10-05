const { userService } = require('../../src/services')

describe('Services: User', () => {
  describe('get', () => {
    it('should return a list of users', async () => {
      const users = [
        {
          id: 1,
          name: 'John Doe',
          username: 'john.doe'
        }
      ]
      const axios = {
        get: jest.fn().mockResolvedValue({ data: users })
      }
      const usersData = await userService.getUsers({ axios })

      expect(usersData).toEqual(users)
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('/users')
    })
  })

  describe('get by id', () => {
    it('should return a user', async () => {
      const user = {
        id: 1,
        name: 'John Doe',
        username: 'john.doe'
      }
      const axios = {
        get: jest.fn().mockResolvedValue({ data: user })
      }
      const userId = 1
      const userData = await userService.getUserById({ axios }, userId)

      expect(userData).toEqual(user)
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith(`/users/${userId}`)
    })
  })

  describe('create', () => {
    it('should create a user', async () => {
      const user = {
        id: 3,
        name: 'John Doe',
        username: 'john.doe'
      }
      const axios = {
        post: jest.fn().mockResolvedValue({ data: user })
      }
      const userData = await userService.createUser({ axios }, user)

      expect(userData).toEqual(user)
      expect(axios.post).toHaveBeenCalledTimes(1)
      expect(axios.post).toHaveBeenCalledWith('/users', user)
    })
  })

  describe('update', () => {
    it('should update a user', async () => {
      const user = {
        name: 'John Doe Jr.',
        username: 'john.doe.jr'
      }
      const axios = {
        put: jest.fn().mockResolvedValue({ data: user })
      }
      const userId = 3
      const userData = await userService.updateUser({ axios }, userId, user)

      expect(userData).toEqual(user)
      expect(axios.put).toHaveBeenCalledTimes(1)
      expect(axios.put).toHaveBeenCalledWith(`/users/${userId}`, user)
    })
  })

  describe('delete', () => {
    it('should delete a user', async () => {
      const axios = {
        delete: jest.fn().mockResolvedValue()
      }
      const userId = 3
      await userService.deleteUser({ axios }, userId)

      expect(axios.delete).toHaveBeenCalledTimes(1)
      expect(axios.delete).toHaveBeenCalledWith(`/users/${userId}`)
    })
  })
})
