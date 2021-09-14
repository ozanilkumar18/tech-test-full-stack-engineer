import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { capsulesReducer, formReducer, landingPadReducer } from "./reducers";

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === "development";

const reducers = {
  spaceData: (oldState = {}, action) => {
    const { type } = action;
    switch (type) {
      default:
        return oldState;
    }
  },
};

const slices = combineReducers({
  ...reducers,
  spaceAirport: combineReducers({
    capsules: capsulesReducer,
    landingPad: landingPadReducer,
  }),
  forms: formReducer,
});

const composeEnhancers =
  isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })
    : compose;

const store = createStore(slices, composeEnhancers(applyMiddleware(thunk)));

export default store;
