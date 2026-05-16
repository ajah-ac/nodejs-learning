import express from 'express'
 const app=express()
const router=express.Router()
app.get('/products',(req,res)=>{
    res.status(200).send('Here are your products')
})

export default router