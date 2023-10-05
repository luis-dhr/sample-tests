const getPosts = async ({ axios }) => {
  try {
    const { data } = await axios.get('/posts')
    return data
  } catch (error) {
    return null
  }
}

const getPostById = async ({ axios }, id) => {
  try {
    const { data } = await axios.get(`/posts/${id}`)
    return data
  } catch (error) {
    return null
  }
}

const createPost = async ({ axios }, body) => {
  try {
    const { data } = await axios.post('/posts', body)
    return data
  } catch (error) {
    return null
  }
}

const updatePost = async ({ axios }, id, body) => {
  try {
    const { data } = await axios.put(`/posts/${id}`, body)
    return data
  } catch (error) {
    return null
  }
}

const deletePost = async ({ axios }, id) => {
  try {
    await axios.delete(`/posts/${id}`)
    return true
  } catch (error) {
    return null
  }
}

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
}
