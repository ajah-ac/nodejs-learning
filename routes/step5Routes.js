import express from 'express'
import { validate } from '../middleware/step5';
import { getProducts,createProducts } from '../controllers/step5';
const router=express.Router();
router.get('/',getProducts)

router.post('/',validate,createProducts)
export default router