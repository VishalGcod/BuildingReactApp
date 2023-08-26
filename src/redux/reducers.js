import { ADD_API_DATA, ADD_DATA, DEL_API_DATA, EDIT_API_DATA } from './actions';
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

const initialApiState={
  apiData:[],
}

export const fetchingApiReducer=(state=initialApiState,action)=>{
  switch(action.type){
    case ADD_API_DATA:
      return{
        apiData:action.payload
      }
      case DEL_API_DATA:
        return{
          apiData:action.payload
        }
        case EDIT_API_DATA:{
          return{
            apiData:action.payload
          }
        }
      default :
      return state;
  }
}