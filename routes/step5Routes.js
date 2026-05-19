import express from 'express'
import { validate } from '../middleware/step5.js';
import { getProducts,createProducts, getProductByid, updateProduct, deleteProduct } from '../controllers/step5.js';
const router=express.Router();
router.get('/',getProducts)
router.post('/',validate,createProducts)
router.get('/:id',getProductByid)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)
export default router