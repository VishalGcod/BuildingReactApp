import { ADD_DATA } from './actions';
const initialState = {
  arr: [],
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        arr: action.payload,
      };
    default:
      return state;
  }
};
