const express = require('express')
const libraries = require('../libraries')
const { postService, sharedService } = require('../services')

const router = express.Router()

router.get('/', async (_req, res) => {
  const posts = await postService.getPosts(libraries)

  res.status(200).send({ posts })
})

router.get('/:id', async (req, res) => {
  const post = await postService.getPostById(libraries, req.params.id)

  res.status(200).send({ post })
})

router.post('/', async (req, res) => {
  const { body } = req
  const newPost = await sharedService.createUserPost(libraries, body)

  res.status(201).send({ newPost })
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { body } = req
  const postUpdated = await postService.updatePost(libraries, id, body)

  res.status(200).send({ postUpdated })
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await postService.deletePost(libraries, id)

  res.sendStatus(204)
})

module.exports = router
