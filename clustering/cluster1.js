import os, { availableParallelism } from 'os';
import cluster from 'cluster';
import { createServer } from 'http';
const cpuCount=availableParallelism();
if(cluster.isPrimary){
    for(let i=0;i<cpuCount;i++){
        cluster.fork()
    }
}else{
   const server= createServer((req,res)=>{
        res.end(`Handled by process id:${process.pid}`)
    })
    server.listen(3000,()=>{
        console.log('Server is listening on port 3000')
    })
}