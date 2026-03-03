import * as customerService from '../services/customer.services.js';

export const getCustomers = async (req, res) => {
  const data = await customerService.getAllCustomersService();
  res.json(data);
};
//============================================================================================================

export const postCustomer = async (req, res) => {
  const data = await customerService.createCustomerService(req.body);
  res.status(201).json(data);
};

//============================================================================================================

// El nombre del archivo es singular: customer.controller.js
export const updateCustomer = async (req, res) => {
  const { id } = req.params; // Sacamos el ID de la URL
  try {
    const updated = await customerService.updateCustomerService(id, req.body);
    if (!updated) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json({ message: "Cliente actualizado", data: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//============================================================================================================

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await customerService.deleteCustomerService(id);
    if (!deleted) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
