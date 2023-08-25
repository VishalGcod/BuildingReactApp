export const ADD_DATA = 'ADD_DATA';
export const ADD_API_DATA = 'ADD_API_DATA';
import axios from 'axios';

export const appendData = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  };
};

export const addToApi = (dta) => {
  return {
    type: ADD_API_DATA,
    payload: dta,
  };
};

export const apiDatas = () => {
  return async (dispatch) => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        dispatch(appendData(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log('api:', err);
      });
  };
};

export const fetching = () => {
  return async (dispatch) => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => dispatch(addToApi(res.data)))
      .catch((err) => console.log(err));
  };
};
