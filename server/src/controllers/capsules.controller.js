const { CAPSULES_URL } = require("../constants/constant");
const axios = require("axios");

const capsulesController = async (req, res) => {
  try {
    const response = await axios.get(CAPSULES_URL);
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
};

module.exports = capsulesController;