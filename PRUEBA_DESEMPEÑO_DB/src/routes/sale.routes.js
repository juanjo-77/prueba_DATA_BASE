import { Router } from 'express';
import { postSale, getSales } from '../controllers/sale.controller.js';

const router = Router();

router.post('/sales', postSale);
router.get('/sales', getSales);

export default router;


