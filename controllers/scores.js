const { prisma } = require("../lib/prisma");

const getScores = async (req, res) => {
  const scores = await prisma.score.findMany({
    orderBy: [{ seconds: "asc" }],
  });
  res.json(scores);
};

const postScores = async (req, res) => {
  const { username, seconds, setting_id } = req.body;
  await prisma.score.create({
    data: {
      username,
      seconds: parseFloat(seconds),
      setting_id: parseInt(setting_id),
    },
  });
  res.sendStatus(201);
};

module.exports = {
  getScores,
  postScores,
};
