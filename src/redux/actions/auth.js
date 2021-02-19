export const peekPassword = () => {
  return async (dispatch) => {
    dispatch({
      type: 'PEEK_PASSWORD',
    });
  };
};
