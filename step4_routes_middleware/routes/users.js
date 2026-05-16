import express from 'express'
const router=express.Router()
app.get('/users',(req,res)=>{
    res.status(200).send('User route')
})

export default router