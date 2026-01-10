const { prisma } = require("../lib/prisma");

const getCords = async (req, res) => {
  const { settingId } = req.params;
  const cords = await prisma.cord.findMany({
    where: {
      setting_id: parseInt(settingId),
    },
  });
  res.json(cords);
};

module.exports = {
  getCords,
};
