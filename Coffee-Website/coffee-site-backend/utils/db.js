const fs = require('fs-extra');
const path = require('path');

async function readData(file) {
  const filePath = path.join(__dirname, '../data', file);
  await fs.ensureFile(filePath);
  const data = await fs.readJson(filePath, { throws: false });
  return data || [];
}

async function writeData(file, data) {
  const filePath = path.join(__dirname, '../data', file);
  await fs.writeJson(filePath, data, { spaces: 2 });
}

module.exports = { readData, writeData };
