import {
  ADD_API_DATA,
  ADD_DATA,
  DELETE_DATA,
  DEL_API_DATA,
  EDIT_API_DATA,
  POST_API_DATA,
  POST_DATA,
  PROTECTED_ROUTE,
  PUT_DATA,
} from './actions';
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

const initialApiState = {
  apiData: [],
};

export const fetchingApiReducer = (state = initialApiState, action) => {
  switch (action.type) {
    case ADD_API_DATA:
      return {
        apiData: action.payload,
      };
    case DEL_API_DATA:
      return {
        apiData: action.payload,
      };
    case EDIT_API_DATA:
      return {
        apiData: action.payload,
      };
    case POST_API_DATA:
      return {
        apiData: action.payload,
      };
    case POST_DATA:
      return {
        apiData: action.payload,
      };
    case DELETE_DATA:
      return {
        apiData:state.apiData.filter((item, Index) => Index !== action.payload),
      }
    case PUT_DATA:
      return {
        apiData: action.payload,
      };
    default:
      return state;
  }
};

export const rout = {
  auth: false,
};

export const authReducer = (state = rout, action) => {
  switch (action.type) {
    case PROTECTED_ROUTE:
      return {
        auth: action.payload,
      };
    default:
      return state;
  }
};
