import * as saleService from '../services/sale.services.js';

export const postSale = async (req, res) => {
  try {
    const newSale = await saleService.createSaleService(req.body);
    res.status(201).json({
      message: "Venta registrada con éxito",
      sale: newSale
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const getSales = async (req, res) => {
  try {
    const sales = await saleService.getAllSalesService();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
