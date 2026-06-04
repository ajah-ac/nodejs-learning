import express from 'express'
import { getAllProducts } from '../controllers/productsController.ts'
 const router=express.Router()
router.get('/',getAllProducts)
router.post('/',getAllProducts)
router.put('/:id',getAllProducts)
router.delete('/:id',getAllProducts)
export default router