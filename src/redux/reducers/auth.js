// ===== Auth Reducer
const initialState = {
  showPassword: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'PEEK_PASSWORD': {
      return {
        ...state,
        showPassword: !state.showPassword,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default auth;
