// src/services/report.services.js
export const getCustomerHistoryService = async (customerName) => {
  const query = `
    SELECT 
        c.customer_name, 
        SUM(s.total_line_value) as total_compras,
        COUNT(s.id_sale) as cantidad_ventas
    FROM juan_jose.customer c
    LEFT JOIN juan_jose.sale s ON s.id_customer::text = c.id_customer::text
    WHERE c.customer_name = $1
    GROUP BY c.customer_name;
  `;
  const { rows } = await pool.query(query, [customerName]);
  return rows;
};
