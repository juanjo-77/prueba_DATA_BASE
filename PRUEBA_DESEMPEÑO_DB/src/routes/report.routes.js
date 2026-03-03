// src/routes/report.routes.js
import { Router } from 'express';
import { getReports } from '../controllers/report.controller.js';

const router = Router();

// Cambia '/reports' por '/' para que no se repita
router.get('/', getReports); 

export default router;
