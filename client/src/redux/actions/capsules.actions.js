import {
  CAPSULES_LOAD,
  CAPSULES_ERROR,
  CAPSULES_SUCCESS,
  CAPSULES_FETCHING,
} from "../../constants";

export const loadCapsules = request => ({
  type: CAPSULES_LOAD,
  payload: {
    ...request,
  },
});

export const capsulesError = () => ({
  type: CAPSULES_ERROR,
});


export const capsulesSuccess = res => ({
  type: CAPSULES_SUCCESS,
  payload: {
    ...res,
  },
});

export const isCapsulesFetching = () => ({
  type:   CAPSULES_FETCHING,
});