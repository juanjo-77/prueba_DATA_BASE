import { pool } from '../config/pgconfig.js';

export const getAllProductsService = async () => {
  const { rows } = await pool.query('SELECT * FROM juan_jose.product');
  return rows;
};

// Cambia tu consulta por esta más simple:
export const createProductService = async (data) => {
  const { sku, name, price, category } = data;
  const query = `
    INSERT INTO juan_jose.product (id_product, product_name, unit_price, product_category)
    VALUES ($1, $2, $3, $4) 
    RETURNING *;`; // Borramos el ON CONFLICT...
  const { rows } = await pool.query(query, [sku, name, price, category]);
  return rows;
};
