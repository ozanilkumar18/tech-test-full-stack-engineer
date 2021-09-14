import { createSelector } from "reselect";

export const getField = (formName, field) =>
  createSelector(
    (state) => state.forms,
    (forms) => forms[formName] && forms[formName][field]
  );
