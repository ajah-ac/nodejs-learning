import express from 'express'
import { getAllProducts } from '../controllers/productsController.ts'
 const router=express.Router()
router.get('/',getAllProducts)
router.post('/')
router.put('/:id')
router.delete('/:id')
export default router