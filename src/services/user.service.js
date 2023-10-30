const getUserById = async ({ axios }, id) => {
  try {
    const { data } = await axios.get(`/users/${id}`)
    return data
  } catch (error) {
    return null
  }
}

const getUsers = async ({ axios }) => {
  try {
    const { data } = await axios.get('/users')
    return data
  } catch (error) {
    return null
  }
}

const createUser = async ({ axios }, body) => {
  try {
    const { data } = await axios.post('/users', body)
    return data
  } catch (error) {
    return null
  }
}

const updateUser = async ({ axios }, id, body) => {
  try {
    const { data } = await axios.put(`/users/${id}`, body)
    return data
  } catch (error) {
    return null
  }
}

const deleteUser = async ({ axios }, id) => {
  try {
    await axios.delete(`/users/${id}`)
    return true
  } catch (error) {
    return null
  }
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
