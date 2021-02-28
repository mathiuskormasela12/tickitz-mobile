export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: {
    token
  }
})

export const logout = () => {
  return {
    type: 'LOGOUT',
  }
}