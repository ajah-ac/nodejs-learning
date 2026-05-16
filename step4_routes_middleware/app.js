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


app.listen(3000,()=>{
    console.log('Server is listening on port 3000')

})