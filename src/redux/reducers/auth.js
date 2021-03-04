// ===== Auth Reducer
const initialState = {
  token: null,
  fullName: null,
  email: null,
  phoneNumber: null,
  isRefresh: false,
  poster: null,
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

    case 'SET_REFRESH': {
      return {
        ...state,
        isRefresh: !state.isRefresh
      }
    }

    case 'SET_USER_DETAIL': {
      return {
        ...state,
        fullName: action.payload.firstName && `${action.payload.firstName}${action.payload.lastName && ` ${action.payload.lastName && action.payload.lastName}`}`,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        poster: action.payload.poster,
      }
    }

    case 'SET_INPUT_USER' : {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
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
