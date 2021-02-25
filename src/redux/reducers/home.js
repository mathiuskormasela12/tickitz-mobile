const initialState = {
  toggle: false,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_TOGGLE': {
      return {
        ...state,
        toggle: !state.toggle,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default home;
