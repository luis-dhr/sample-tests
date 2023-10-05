const getUsers = async ({ axios }) => {
  const { data } = await axios.get('/users')
  return data
}

const getUserById = async ({ axios }, id) => {
  const { data } = await axios.get(`/users/${id}`)
  return data
}

const createUser = async ({ axios }, body) => {
  const { data } = await axios.post('/users', body)
  return data
}

const updateUser = async ({ axios }, id, body) => {
  const { data } = await axios.put(`/users/${id}`, body)
  return data
}

const deleteUser = async ({ axios }, id) => {
  await axios.delete(`/users/${id}`)
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
