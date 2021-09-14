import { createSelector } from "reselect";

export const getCapsules = createSelector(
  (state) => state.spaceAirport,
  (spaceAirportSlice) => {

    return (spaceAirportSlice.capsules.capsules);
  }
);

export const isCapsulesFetching = createSelector(
  (state) => state.spaceAirport,
  (spaceAirportSlice) => spaceAirportSlice.capsules.isFetching
);

  