import express from 'express'
const app=express()
app.use(express.json())
const ValidMW=(req,res,next)=>{
    const body=req.body
    if(typeof body.name!=='string'){
        return res.status(400).send('Name must be a string')

    } else{
        next()
    }

}
app.post('/add-user',ValidMW,(req,res)=>{
    const newItem={
        id:Date.now(),
        name:req.body.name
    }
    console.log(newItem)
    res.json(newItem)
})
app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})