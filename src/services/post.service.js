const getPosts = async ({ axios }) => {
  const { data } = await axios.get('/posts')
  return data
}

const getPostById = async ({ axios }, id) => {
  const { data } = await axios.get(`/posts/${id}`)
  return data
}

const createPost = async ({ axios }, body) => {
  const { data } = await axios.post('/posts', body)
  return data
}

const updatePost = async ({ axios }, id, body) => {
  const { data } = await axios.put(`/posts/${id}`, body)
  return data
}

const deletePost = async ({ axios }, id) => {
  await axios.delete(`/posts/${id}`)
}

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
}
