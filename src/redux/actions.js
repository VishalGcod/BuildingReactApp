export const ADD_DATA = 'ADD_DATA';
export const ADD_API_DATA = 'ADD_API_DATA';
export const DEL_API_DATA = 'DEL_API_DATA';
export const EDIT_API_DATA = 'EDIT_API_DATA';
export const POST_API_DATA ='POST_API_DATA';
export const PROTECTED_ROUTE='PROTECTED_ROUTE';
export const POST_DATA='POST_DATA';
export const DELETE_DATA='DELETE_DATA';
export const PUT_DATA='PUT_DATA'

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

export const deleteApi = (dta) => {
  return {
    type: DEL_API_DATA,
    payload: dta,
  };
};

export const editApi = (dta) => {
  return {
    type: EDIT_API_DATA,
    payload: dta,
  };
};

export const postApi = (dta) => {
  return {
    type: POST_API_DATA,
    payload: dta,
  };
};

export const protectedRoute = (dta) => {
  return {
    type: PROTECTED_ROUTE,
    payload: dta,
  };
};

export const postData = (dta) => {
  return {
    type: POST_DATA,
    payload: dta,
  };
};

export const putData = (dta) => {
  return {
    type: PUT_DATA,
    payload: dta,
  };
};

export const deleteData = (dta) => {
  return {
    type: DELETE_DATA,
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

export const postUsers = (data) => {
  return (dispatch) => {
    axios
      .post("https://fakestoreapi.com/products", data)
      .then((res) => {
        dispatch(postData(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const delUsers = (index) => {
  return (dispatch) => {
    axios
      .delete("https://fakestoreapi.com/products/" + index)
      .then((res) => {
        dispatch(deleteData(index));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateUsers = (index,data) => {
  return (dispatch) => {
    axios
      .put("https://fakestoreapi.com/products/" + index, { data })
      .then((res) => {
        dispatch(putData(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};