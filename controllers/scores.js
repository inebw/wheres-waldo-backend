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
      username: `${username ? username : "Anonymous"}`,
      seconds: parseFloat(seconds),
      setting_id: parseInt(setting_id),
    },
  });
  const user = await prisma.score.findFirst({
    where: {
      username: `${username ? username : "Anonymous"}`,
      seconds: parseFloat(seconds),
      setting_id: parseInt(setting_id),
    },
  });
  res.json({ scoreId: user.id });
};

module.exports = {
  getScores,
  postScores,
};
