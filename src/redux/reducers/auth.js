// ===== Auth Reducer
const initialState = {
  token: null,
  isRefresh: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN': {
      return {
        ...state,
        token: action.payload.token,
      };
    }

    case 'LOGOUT': {
      return {
        ...state,
        token: null,
      };
    }

    case 'SET_REFRESH': {
      return {
        ...state,
        isRefresh: !state.isRefresh,
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
