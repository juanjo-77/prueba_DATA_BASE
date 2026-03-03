import * as reportService from '../services/report.services.js';

export const getReports = async (req, res) => {
  try {
    const type = req.query.type; // Usaremos parámetros de consulta (?type=...)
    let data;

    if (type === 'suppliers') {
      data = await reportService.getSupplierAnalysisService();
    } else if (type === 'history') {
      data = await reportService.getCustomerHistoryService(req.query.name);
    } else if (type === 'top') {
      data = await reportService.getTopProductsByCategoryService(req.query.category);
    } else {
      return res.status(400).json({ message: "Tipo de reporte no válido" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
