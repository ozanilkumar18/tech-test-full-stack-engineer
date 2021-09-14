const LANDING_PAD_END_POINT_PATH = "/landingPad/:id?";
const CAPSULES_END_POINT_PATH = "/capsules";
const BASE_PATH = "/spaceAirport";
const LANDING_PAD_SELECT_QUERY="SELECT spaceItem FROM spaceData WHERE id=";
const LANDING_PAD_INSERT_QUERY="INSERT INTO spaceData (id, spaceItem) VALUES (?, ?)";
const LANDING_PAD = "https://api.spacexdata.com/v3/landpads/";
const CAPSULES_URL =
  "https://api.spacexdata.com/v3/capsules?sort=original_launch";

module.exports = {
  LANDING_PAD,
  CAPSULES_URL,
  BASE_PATH,
  CAPSULES_END_POINT_PATH,
  LANDING_PAD_END_POINT_PATH,
  LANDING_PAD_SELECT_QUERY,
  LANDING_PAD_INSERT_QUERY
};
