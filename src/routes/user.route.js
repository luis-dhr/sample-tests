const express = require('express')
const libraries = require('../libraries')
const { userService } = require('../services')

const router = express.Router()

router.get('/', async (req, res) => {
  const users = await userService.getUsers(libraries)

  if (users === null) {
    return res.status(404).send({ message: 'Users not found' })
  }

  res.status(200).send({ users })
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const user = await userService.getUserById(libraries, id)

  if (user === null) {
    return res.status(404).send({ message: 'User not found' })
  }

  res.status(200).send({ user })
})

router.post('/', async (req, res) => {
  const { body } = req
  const newUser = await userService.createUser(libraries, body)

  if (newUser === null) {
    return res.status(404).send({ message: 'User not found' })
  }

  res.status(201).send({ newUser })
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { body } = req
  const userUpdated = await userService.updateUser(libraries, id, body)

  if (userUpdated === null) {
    return res.status(404).send({ message: 'User not found' })
  }

  res.status(200).send({ userUpdated })
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const deleted = await userService.deleteUser(libraries, id)

  if (deleted === null) {
    return res.status(404).send({ message: 'User not found' })
  }

  res.sendStatus(204)
})

module.exports = router
