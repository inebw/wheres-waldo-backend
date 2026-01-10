const { Router } = require("express");
const { getScores, postScores } = require("../controllers/scores");

const scores = Router();

scores.get("/", getScores);
scores.post("/", postScores);

module.exports = scores;
