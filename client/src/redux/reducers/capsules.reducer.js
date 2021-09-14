import {
    CAPSULES_ERROR,
    CAPSULES_SUCCESS,
    CAPSULES_FETCHING,
  } from '../../constants';
  
  const initialState = {
    isFetching: false,
    capsules: [],
    isError: false
  };
  
  export const capsulesReducer = (state = initialState, action) => {
      console.log(`action##${JSON.stringify(action)}`);
    switch (action.type) {
      case CAPSULES_FETCHING:
        return {
          ...state,
          isFetching: !state.isFetching
        };
      case CAPSULES_SUCCESS:
        return {
          ...state,
          isFetching: false,
          isError: false,
          capsules:action.payload
        };
      case CAPSULES_ERROR:
        return {
          ...state,
          isFetching: false,
          isError: true
        };
      default:
        return state;
    }
  }