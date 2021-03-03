export const setTransaction = (payload) => ({
  type: 'SET_TRANSACTION',
  payload
});

export const resetTransaction = () => ({
  type: 'RESET_TRANSACTION',
});

export const setSeat = (seats) => ({
  type: 'SET_SEAT',
  payload: { seats }
});

export const setPaymentMethod = (paymentMethod) => ({
  type: 'SET_PAYMENT_METHOD',
  payload: { paymentMethod }
});

export const setOrder = (email, phoneNumber, fullName) => ({
  type: 'SET_ORDER',
  payload: { fullName, email, phoneNumber }
});

export const setMessage = (message, type) => ({
  type: 'SET_MESSAGE',
  payload: { message, type }
});

export const setInput = (name, value) => ({
  type: 'SET_INPUT',
  payload: { name, value }
});