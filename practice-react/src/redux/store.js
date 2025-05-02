import { createStore } from 'redux';

// Define the initial state
const initialState = {
  count: 0,
};

// Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Create an action creator for incrementing the count
export const increment = () => ({
  type: INCREMENT,
});

// Create an action creator for decrementing the count
export const decrement = () => ({
  type: DECREMENT,
});

// Reducer function to handle actions and update state
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(counterReducer);

export default store;
