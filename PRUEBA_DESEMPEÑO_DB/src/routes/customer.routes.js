import { Router } from 'express';
// Agrega las dos funciones nuevas aquí:
import { 
    getCustomers, 
    postCustomer, 
    updateCustomer, 
    deleteCustomer 
} from '../controllers/customer.controller.js';

const router = Router();

router.get('/customers', getCustomers);
router.post('/customers', postCustomer);
router.put('/customers/:id', updateCustomer);    
router.delete('/customers/:id', deleteCustomer); 

export default router;
