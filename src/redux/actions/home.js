export const showToggle = () => {
  return async (dispatch) => {
    dispatch({
      type: 'SHOW_TOGGLE',
    });
  };
};
