import {
  LANDINGPAD_ERROR,
    LANDINGPAD_SUCCESS,
    LANDINGPAD_FETCHING,
  } from '../../constants';
  
  const initialState = {
    isFetching: false,
    capsules: [],
    isError: false
  };
  
  export const landingPadReducer = (state = initialState, action) => {
      
    switch (action.type) {
      case LANDINGPAD_FETCHING:
        return {
          ...state,
          isFetching: !state.isFetching
        };
      case LANDINGPAD_SUCCESS:
        return {
          ...state,
          isFetching: false,
          isError: false,
          landingPad:action.payload
        };
      case LANDINGPAD_ERROR:
        return {
          ...state,
          isFetching: false,
          isError: true
        };
      default:
        return state;
    }
  }