const axios = require("axios");
const dbPool = require("../../db");
const {
  LANDING_PAD,
  LANDING_PAD_SELECT_QUERY,
  LANDING_PAD_INSERT_QUERY,
} = require("../constants/constant");

const landingPadController = async (req, res) => {
  const {
    params: { id: pathParam },
  } = req;

  if (pathParam) {
    const rows = await dbPool.query(
      `${LANDING_PAD_SELECT_QUERY}"${pathParam}"`
    );
    if (rows.length > 0) {
      res.status(200);
      res.send({
        result: JSON.parse(rows[0].spaceItem), // considering id as primary key there will be only one match
      });
    } else {
      try {
        const response = await axios.get(`${LANDING_PAD}${pathParam}`);
        const id = response.data.id;
        const result = JSON.stringify(response.data);
        await dbPool.query(LANDING_PAD_INSERT_QUERY, [id, result]);
        res.status(200);
        res.send({
          result: response.data,
        });
      } catch (error) {
        res.status(500);
        res.send({
          result: { erroCode: "10005", message: "internal server error" },
        });
      }
    }
  } else {
    res.status(400);
    res.send({
      result: { erroCode: "10001", message: "bad request" },
    });
  }
};

module.exports = landingPadController;
