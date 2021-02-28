// ===== Auth Reducer
const initialState = {
  token: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN': {
      return {
        ...state,
        token: action.payload.token
      };
    }

    case 'LOGOUT': {
      return {
        ...state,
        token: null
      }
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default auth;
