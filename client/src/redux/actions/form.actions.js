import { SET_FIELD_VALUE } from "../../constants";

export const setFieldValue = (formName, fieldName, value) => ({
  type: SET_FIELD_VALUE,
  payload: {
    formName,
    fieldName,
    value
  },
});
