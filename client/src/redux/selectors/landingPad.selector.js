import { createSelector } from "reselect";

export const getLandingPad = createSelector(
  (state) => state.spaceAirport,
  (spaceAirportSlice) => spaceAirportSlice.landingPad.result
);


export const isLandingPadFetching = createSelector(
  (state) => state.spaceAirport,
  (spaceAirportSlice) => spaceAirportSlice.landingPad.isFetching
);
