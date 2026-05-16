import express from 'express'
const router=express.Router()
router.get('/products',(req,res)=>{
    res.status(200).send('Here are your products')
})

export default router