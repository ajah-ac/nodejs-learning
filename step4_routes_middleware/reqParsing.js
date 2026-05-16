import express from 'express'
const app=express()
app.use((req,res,next)=>{
    console.log(req.method,req.url)
    next()
})
const data=[{
    id:1,
    name:'orange',
    price:100
}]
app.use(express.json())
app.post('/add-item',(req,res)=>{
    const newItem={
        id:Date.now(),
        name:req.body.name,
        price:req.body.price
    }
    data.push(newItem)
     console.log(newItem)

    res.json(newItem)
})

app.listen(3000,()=>{
    console.log('Server is listening on Port 3000')

})
