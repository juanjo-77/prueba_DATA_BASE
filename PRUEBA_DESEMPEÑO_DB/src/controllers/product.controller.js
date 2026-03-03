import * as productService from '../services/product.services.js';

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProductService(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
