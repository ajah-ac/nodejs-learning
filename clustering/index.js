import express from 'express'
import fs from 'fs/promises'
const app=express()
app.get('/',async (req,res)=>{
    try {
        const data=await fs.readFile('content.txt','utf-8')
        res.status(200).send(data)
    
    } catch (error) {
        console.log('Error reading file:',error)
        res.status(500).send('Internal Server Error');
    }
    
})
app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})