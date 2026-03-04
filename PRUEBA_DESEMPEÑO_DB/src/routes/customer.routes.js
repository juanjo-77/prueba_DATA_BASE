import { Router } from 'express';

// Importa todas las funciones
import { 
    getCustomers, 
    postCustomer, 
    updateCustomer, 
    deleteCustomer 
} from '../controllers/customer.controller.js';

// Aqui se guardan todas las rutas de customers
const router = Router();

router.get('/customers', getCustomers);
router.post('/customers', postCustomer);
router.put('/customers/:id', updateCustomer);    
router.delete('/customers/:id', deleteCustomer); 

export default router;
