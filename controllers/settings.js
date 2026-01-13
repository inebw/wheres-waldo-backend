const { prisma } = require("../lib/prisma");

const getSettings = async (req, res) => {
  const settings = await prisma.setting.findMany();
  res.json(settings);
};

const getSetting = async (req, res) => {
  const { id } = req.params;
  const setting = await prisma.setting.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(setting);
};
module.exports = {
  getSettings,
  getSetting,
};
