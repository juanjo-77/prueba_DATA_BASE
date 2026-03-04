import { pool } from '../config/pgconfig.js';

export const getAllSuppliersService = async () => {
  const { rows } = await pool.query('SELECT * FROM juan_jose.supplier');
  return rows;
};

export const createSupplierService = async (data) => {
  const { name, email } = data;
  const query = `
  INSERT INTO juan_jose.supplier (supplier_name, supplier_email) 
  VALUES ($1, $2) 
  RETURNING *;
  `;
  const { rows } = await pool.query(query, [name, email]);
  return rows[0];
};
