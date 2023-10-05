const { createPost } = require('./post.service')
const { getUserById } = require('./user.service')

const createUserPost = async ({ axios }, body) => {
  const user = await getUserById({ axios }, body.userId)

  if (!user) {
    throw new Error('User not found')
  }

  const newPost = await createPost({ axios }, body)

  return newPost
}

module.exports = {
  createUserPost
}
