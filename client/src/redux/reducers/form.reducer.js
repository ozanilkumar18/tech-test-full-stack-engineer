import { SET_FIELD_VALUE } from "../../constants";

const initialState = {
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      const { formName, fieldName, value } = action.payload;
      const formCurrent = {...state[formName] };
      formCurrent[fieldName] = value;
      return {
        ...state,
        [formName]:{...formCurrent},
      };
    default:
      return state;
  }
};
