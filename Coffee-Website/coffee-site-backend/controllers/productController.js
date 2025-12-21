const { readData, writeData } = require('../utils/db');

exports.getAllProducts = async (req, res) => {
  const products = await readData('products.json');
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const products = await readData('products.json');
  const { name, description, price, stock } = req.body;
  const newProduct = { id: products.length + 1, name, description, price, stock };
  products.push(newProduct);
  await writeData('products.json', products);
  res.status(201).json(newProduct);
};

exports.updateProduct = async (req, res) => {
  const products = await readData('products.json');
  const { id } = req.params;
  const product = products.find(p => p.id == id);
  if (!product) return res.status(404).json({ message: 'Товар не найден' });

  const { name, description, price, stock } = req.body;
  Object.assign(product, { name, description, price, stock });
  await writeData('products.json', products);
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  let products = await readData('products.json');
  const { id } = req.params;
  products = products.filter(p => p.id != id);
  await writeData('products.json', products);
  res.json({ message: 'Товар удалён' });
};
