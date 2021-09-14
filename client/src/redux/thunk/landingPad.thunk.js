import axios from "axios";
import { LANDINGPAD_URL } from "../../constants";
import {
  isLaunchingPadFetching,
  launchingPadSuccess,
  launchingPadError,
} from "../actions";

export const loadLaunchingPad = (landingPadId) => {
  return (dispatch) => {
    dispatch(isLaunchingPadFetching());
    axios
      .get(`${LANDINGPAD_URL}/${landingPadId}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        dispatch(launchingPadSuccess(res.data));
      })
      .catch((err) => {
        dispatch(launchingPadError(err.message));
      });
  };
};
