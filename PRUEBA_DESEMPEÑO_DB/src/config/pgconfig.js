import pkg from 'pg';
import 'dotenv/config';

const { Pool } = pkg;  //grupo de conexiones reutilizables

// Configuramos la conexión usando las variables de tu .env
export const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  // Esto es vital si la base de datos es externa (como la IP que pasaste)
  ssl: {
    rejectUnauthorized: false
  }
});

// Prueba rápida de conexión
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error(' Error conectando a Postgres:', err.stack);
  } else {
    console.log(' Conexión a Postgres exitosa');
  }
});
