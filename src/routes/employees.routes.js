import { Router } from "express";
import { 
    getEmployee, 
    createEmployee, 
    updateEmployee, 
    deleteEmployee, 
    getEmployees 
} from "../controllers/employess.controller.js";
const router = Router();

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)
router.post('/employees',createEmployee)
router.put('/employees/:id', updateEmployee)
router.delete('/employees/:idid', deleteEmployee)

export default router;
