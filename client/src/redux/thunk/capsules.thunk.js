import axios from "axios";
import { CAPSULES_URL } from "../../constants";
import { isCapsulesFetching, capsulesSuccess, capsulesError } from "../actions";

export const fetchCapsules = () => {
  return (dispatch) => {
    dispatch(isCapsulesFetching());
    axios
      .get(CAPSULES_URL, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        dispatch(capsulesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(capsulesError(err.message));
      });
  };
};
