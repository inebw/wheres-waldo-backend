const { Router } = require("express");
const { getSettings, getSetting } = require("../controllers/settings");

const settings = Router();

settings.get("/", getSettings);
settings.get("/:id", getSetting);
module.exports = settings;
