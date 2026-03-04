import { Router } from 'express';
import { getProducts, postProduct } from '../controllers/product.controller.js';

const router = Router();

router.get('/products', getProducts);
router.post('/products', postProduct);

export default router;


