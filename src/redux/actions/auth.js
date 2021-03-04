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

export const refresh = () => {
  return {
    type: 'SET_REFRESH',
  }
}

export const setInputUser = (name, value) => {
  return {
    type: 'SET_INPUT_USER',
    payload: { name, value }
  }
}

export const setUserDetail = (data) => {
  return {
    type: 'SET_USER_DETAIL',
    payload: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      poster: data.poster
    }
  }
}