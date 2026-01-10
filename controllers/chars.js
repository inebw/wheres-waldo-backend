const { prisma } = require("../lib/prisma");

const getChars = async (req, res) => {
  const chars = await prisma.char.findMany();
  res.json(chars);
};

const getChar = async (req, res) => {
  const { id } = req.params;
  const char = await prisma.char.findUnique({ where: { id: parseInt(id) } });
  res.json(char);
};

module.exports = {
  getChars,
  getChar,
};
