// src/app.js
import express from 'express';

// Cada archivo define los endpoint y aqui los importamos
import saleRoutes from './routes/sale.routes.js';
import productRoutes from './routes/product.routes.js';
import supplierRoutes from './routes/supplier.routes.js';
import customerRoutes from './routes/customer.routes.js';
import reportRoutes from './routes/report.routes.js'; 

//declaramos app que sera el que maneje todas las rutas
const app = express();
app.use(express.json());  //recibir datos en json

//todas las ruta comienzan con /api
app.use('/api', saleRoutes);
app.use('/api', customerRoutes);
app.use('/api', productRoutes);
app.use('/api', supplierRoutes);

export default app;  //exporta app para usarla en server
