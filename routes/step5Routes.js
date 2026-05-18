import express from 'express'
import { validate } from '../middleware/step5.js';
import { getProducts,createProducts, getProductByid } from '../controllers/step5.js';
const router=express.Router();
router.get('/',getProducts)
router.post('/',validate,createProducts)
router.get('/:id',getProductByid)
export default router