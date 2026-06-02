import { createServer } from "http"
import path from 'path'
const server=createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'})
 const filename=path.dirname('step1/data.txt')
    res.end(filename)
})
server.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})
