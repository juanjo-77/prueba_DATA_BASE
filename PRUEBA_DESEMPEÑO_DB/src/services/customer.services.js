
import { pool } from '../config/pgconfig.js';   //conexion a postgres

export const getAllCustomersService = async () => {
  const { rows } = await pool.query('SELECT * FROM juan_jose.customer');
  return rows;
};



//============================================================================================================

export const createCustomerService = async (data) => {
  const { name, email, address, phone } = data;
  
  // Quitamos el ON CONFLICT para que no de error
  const query = `
    INSERT INTO juan_jose.customer (customer_name, customer_email, customer_address, customer_phone)
    VALUES ($1, $2, $3, $4) 
    RETURNING *;
  `;
  
  const { rows } = await pool.query(query, [name, email, address, phone]);
  return rows;
};



//============================================================================================================

// UPDATE: Modifica un cliente usando su ID
export const updateCustomerService = async (id, data) => {
  const { name, email, address, phone } = data;
  const query = `
    UPDATE juan_jose.customer 
    SET customer_name = $1, customer_email = $2, customer_address = $3, customer_phone = $4
    WHERE id_customer = $5 
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [name, email, address, phone, id]);
  
  return rows[0];  // devuelve el cliente eliminado, sino undefined
};


//============================================================================================================

// DELETE: Borra un cliente por su ID
export const deleteCustomerService = async (id) => {
  const query = 'DELETE FROM juan_jose.customer WHERE id_customer = $1 RETURNING *;';
  const { rows } = await pool.query(query, [id]);

  return rows[0];// devuelve el cliente eliminado, sino undefined
};
