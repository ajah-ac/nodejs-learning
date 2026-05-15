import cluster from "node:cluster";
import { availableParallelism } from "node:os";
import { dirname } from "node:path";
const cpuCount=availableParallelism();

cluster.setupPrimary({
    exec:'index.js'

});
for(let i=0;i<cpuCount;i++){
    cluster.fork()
}

cluster.on('exit',(worker,code,signal)=>{
    console.log(`Worker ${worker.process.pid} has terminated `)
    console.log(`Initiating replacement`)
    cluster.fork()
})