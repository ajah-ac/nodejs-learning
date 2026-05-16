import express from 'express';

const app=express()

app.use((req,res,next)=>{
    console.log(`Method:${req.method}, URL:${req.url}`)
    next()
})
app.listen(3000,()=>{
    console.log('Server is listening on port 3000')

})