export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: {
    token,
  },
});

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const refresh = () => {
  return {
    type: 'SET_REFRESH',
  };
};
