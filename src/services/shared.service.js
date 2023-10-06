const { createPost } = require('./post.service')
const { getUserById } = require('./user.service')

const createUserPost = async ({ axios }, postData) => {
  const user = await getUserById({ axios }, postData.userId)
  if (!user) {
    throw new Error('User not found')
  }

  const newPost = await createPost({ axios }, postData)
  return newPost
}

module.exports = {
  createUserPost
}
