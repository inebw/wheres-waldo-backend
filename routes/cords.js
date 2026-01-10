const { Router } = require("express");
const { getCords } = require("../controllers/cords");

const cords = Router();

cords.get("/:settingId", getCords);

module.exports = cords;
