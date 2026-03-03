// src/app.js
import express from 'express';
import saleRoutes from './routes/sale.routes.js';
import productRoutes from './routes/product.routes.js';
import supplierRoutes from './routes/supplier.routes.js';
import customerRoutes from './routes/customer.routes.js';
import reportRoutes from './routes/report.routes.js'; // <-- 1. AGREGA ESTA IMPORTACIÓN

const app = express();
app.use(express.json());

app.use('/api', saleRoutes);
app.use('/api', customerRoutes);
app.use('/api', productRoutes);
app.use('/api', supplierRoutes);
app.use('/api', reportRoutes); // <-- 2. AGREGA ESTA LÍNEA AQUÍ

export default app;
app.get('/debug', (req, res) => res.send("El servidor responde en /debug"));
