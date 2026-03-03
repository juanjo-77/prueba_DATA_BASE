import * as supplierService from '../services/supplier.services.js';

export const getSuppliers = async (req, res) => {
  try {
    const suppliers = await supplierService.getAllSuppliersService();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postSupplier = async (req, res) => {
  try {
    const newSupplier = await supplierService.createSupplierService(req.body);
    res.status(201).json(newSupplier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
