import express from 'express'
//Basic express server
const app=express()
app.get('/',(req,res)=>{
    res.send('Hello')
})
app.use(express.json())
// Multiple routes
app.get('/about',(req,res)=>{
    res.send('<h1>This is the about page</h1>')
})
app.get('/contact',(req,res)=>{
    res.send('<h1>This is the contact page</h1>')
})
//Route Parameters

app.get('/user/:id',(req,res)=>{
    const id=req.params.id
    res.send(`<h1> UserId is :${id}</h1>`)
})
app.get('/product/:name',(req,res)=>{
    const name=req.params.name
    res.send(`<h1> Product name is :${name}</h1>`)
})
// Different HTTP Methods
app.get('/api/data',(req,res)=>{
    const data=[{id:1,name:'orange'},{id:2,name:'mango'}]
    res.send(JSON.stringify(data,null,2))
})
app.post('/api/data',(req,res)=>{
    const newData={
        id:Date.now(),
        name:req.body.name
    }
    res.send(newData)
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})
