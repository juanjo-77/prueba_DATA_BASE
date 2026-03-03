import { Router } from 'express';
import { getSuppliers, postSupplier } from '../controllers/supplier.controller.js';

const router = Router();
router.get('/suppliers', getSuppliers);
router.post('/suppliers', postSupplier);

export default router;
