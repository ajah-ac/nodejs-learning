import express from 'express'
const app=express()
app.get('/',(req,res)=>{
    res.send('Hello')
})
app.get('/about',(req,res)=>{
    res.send('<h1>This is the about page</h1>')
})
app.get('/contact',(req,res)=>{
    res.send('<h1>This is the contact page</h1>')
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})
