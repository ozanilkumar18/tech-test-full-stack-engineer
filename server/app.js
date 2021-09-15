const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const expressRouter = express.Router();
const {
  capsulesController,
  landingPadController,
} = require("./src/controllers");
const {
  BASE_PATH,
  CAPSULES_END_POINT_PATH,
  LANDING_PAD_END_POINT_PATH,
} = require("./src/constants");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(BASE_PATH, expressRouter);

// Plugging controllers to route
expressRouter.get(CAPSULES_END_POINT_PATH, capsulesController);
expressRouter.get(LANDING_PAD_END_POINT_PATH, landingPadController);

app.listen("4000");
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
);
