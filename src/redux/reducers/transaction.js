const initialState = {
  seats: [],
  showTimeId: null,
  time: null,
  timeId: null,
  cinemaId: null,
  cinemaName: null,
  cinemaPoster: null,
  movieId: null,
  category: null,
  movieTitle: null,
  showTimeDate: null,
  count: null,
  pricePerSeat: null,
  paymentMethod: null,
  fullName: null,
  phoneNumber: null,
  email: null,
  message: null,
  type: null,
  cinemaCity: null,
  totalPayment: null,
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRANSACTION': {
      return {
        ...state,
        showTimeId: action.payload.showTimeId,
        time: action.payload.time,
        timeId: action.payload.timeId,
        category: action.payload.category,
        movieTitle: action.payload.movieTitle,
        showTimeDate: action.payload.showTimeDate,
        cinemaName: action.payload.cinemaName,
        cinemaPoster: action.payload.cinemaPoster,
        cinemaId: action.payload.cinemaId,
        cinemaCity: action.payload.cinemCity,
        movieId: action.payload.movieId,
        pricePerSeat: action.payload.pricePerSeat,
        cinemaCity: action.payload.cinemaCity,
      };
    }

    case 'SET_SEAT' : {
      return {
        ...state,
        seats: action.payload.seats,
        count: action.payload.seats.length,
        totalPayment: Number(action.payload.seats.length) * Number(state.pricePerSeat),
      }
    }

    case 'SET_PAYMENT_METHOD' : {
      return {
        ...state,
        paymentMethod: action.payload.paymentMethod,
      }
    }

    case 'SET_MESSAGE' : {
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
      }
    }

    case 'SET_INPUT' : {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    }

    case 'SET_ORDER' : {
      return {
        ...state,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        fullName: action.payload.fullName,
      }
    }

    case 'RESET_TRANSACTION': {
      return {
        seats: [],
        showTimeId: null,
        time: null,
        category: null,
        movieTitle: null,
        showTimeDate: null,
        count: null,
        pricePerSeat: null,
        paymentMethod: null,
        fullName: null,
        phoneNumber: null,
        email: null,
        message: null,
        type: null,
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
