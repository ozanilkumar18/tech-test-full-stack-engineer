import {
  LANDINGPAD_LOAD,
  LANDINGPAD_ERROR,
  LANDINGPAD_SUCCESS,
  LANDINGPAD_FETCHING,
} from "../../constants";

export const loadLaunchingPad = (request) => ({
  type: LANDINGPAD_LOAD,
  payload: {
    ...request,
  },
});

export const launchingPadError = () => ({
  type: LANDINGPAD_ERROR,
});

export const launchingPadSuccess = (res) => ({
  type: LANDINGPAD_SUCCESS,
  payload: {
    ...res,
  },
});

export const isLaunchingPadFetching = () => ({
  type: LANDINGPAD_FETCHING,
});
