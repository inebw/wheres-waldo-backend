const { Router } = require("express");
const { getChars, getChar } = require("../controllers/chars");

const chars = Router();

chars.get("/", getChars);
chars.get("/:id", getChar);
module.exports = chars;
