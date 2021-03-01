const initialState = {
  seats: [],
  showTimeId: null,
  time: null,
  category: null,
  movieTitle: null,
  showTimeDate: null,
  count: null,
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRANSACTION': {
      return {
        ...state,
        seats: action.payload.seats,
        time: action.payload.time,
        category: action.payload.category,
        movieTitle: action.payload.movieTitle,
        showTimeDate: action.payload.showTimeDate,
        count: action.payload.count
      };
    }

    case 'SET_SHOW_TIME_ID' : {
      return {
        ...state,
        showTimeId: action.payload.showTimeId,
      }
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default transaction;
