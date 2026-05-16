import express from 'express';


const app=express()
const authMiddleware=(req,res,next)=>{
   const token=req.headers.authorization
   if(token){
    next()
   } 
else{
    res.status(401).send('Forbidden')
}

}
app.use((req,res,next)=>{
    console.log(`Method:${req.method}, URL:${req.url}`)
    next()
})

app.get('/api/protected',authMiddleware,(req,res)=>{
res.status(200).send('Hello protected')
})
app.get('/api/unprotected',(req,res)=>{
    res.status(200).send('Hello')
})
app.listen(3000,()=>{
    console.log('Server is listening on port 3000')

})