import { pool } from '../config/pgconfig.js';

export const createSaleService = async (saleData) => {
  const { customer_name, product_sku, quantity, total_line_value, purchase_date } = saleData;

  // 1. Buscamos al cliente por NOMBRE para obtener su ID
  const customerResult = await pool.query(
    'SELECT id_customer FROM juan_jose.customer WHERE customer_name = $1',
    [customer_name]
  );

  if (customerResult.rows.length === 0) {
    throw new Error(`El cliente "${customer_name}" no existe en la base de datos.`);
  }

  const id_customer = customerResult.rows[0].id_customer;

  // 2. Insertamos la venta usando ese ID
  const insertQuery = `
    INSERT INTO juan_jose.sale (id_customer, product_sku, quantity, total_line_value, purchase_date)
    VALUES ($1, $2, $3, $4, $5) RETURNING *;
  `;
  
  const values = [id_customer, product_sku, quantity, total_line_value, purchase_date];
  const { rows } = await pool.query(insertQuery, values);
  return rows[0];
};



export const getAllSalesService = async () => {
  // Traemos los datos de la venta y el nombre del cliente de la tabla customer
  const query = `
    SELECT s.id_sale, c.customer_name, s.product_sku, s.quantity, s.total_line_value, s.purchase_date
    FROM juan_jose.sale s
    JOIN juan_jose.customer c ON s.id_customer::text = c.id_customer::text;
  `;
  const { rows } = await pool.query(query);
  return rows;
};
